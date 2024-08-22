<script lang="ts">
    import { sum, type dataType } from '$lib/utils.js'
    import { onMount } from 'svelte'
    export let data: dataType[];
    export let height: number = 500;
    export let width: number = 500;
    export let collapsePoint: number = Infinity
    export let defaultColor = 'gray'
    export let fontFamily = 'sans-serif'
    export let fontSize: string = height / 20+'px'
    export let fontWeight: number | string = "normal"
    export let labelGapWidth = height/20;
    export let minimumLabelSize = 0.05
    export let minimumValueLabelSize = 0.1
    export let otherColor = 'gray';
    export let sortType: 'asc' | 'desc' | 'none' = 'none';
    export let textColor = 'black'
    export let valueLabelType: 'percent' | 'face' = 'face'
    export let imageURL = null;
    export let imageURLtype = 'PNG'
    let canvasElement: HTMLCanvasElement;
        function renderCanvas() { 
        if(!canvasElement.getContext) return false;
        const canvas = canvasElement.getContext('2d');
        if(!canvas) return false;
        const chartHeight = canvasElement.height;
        const chartWidth = canvasElement.width;
        canvas.clearRect(0, 0, chartWidth, chartHeight);
        // Clear the canvas
        // Prep Data
        data.sort((a,b)=>{
            if(sortType == 'desc') return b.value-a.value;
            if(sortType == 'asc') return a.value-b.value;
            else return 0
        })
        // Collapse entries into other col.
        if(data.length > collapsePoint) {
            const other = {
                label: "Other",
                value: 0,
                color: otherColor
            }
            data.forEach((item, index) => {
                if(index >= collapsePoint - 1) {
                    other.value += item.value
                }
            })
            data = data.filter((v, i) => i >= collapsePoint - 1? false: true)
            data[data.length] = other;
        } 
        // Draw the bars
        let lastArcEnd = 0
        function getText(radius: number, center: [number, number], angle: number): [number, number] {
            const x = center[0] + radius * Math.cos(angle);
            const y = center[1] + radius * Math.sin(angle);
            return [x,y]
        }
        const sumValue = sum(...data.map(item => item.value))
        canvas.textAlign = "center";
        canvas.textBaseline = "middle";
        data.forEach((item: dataType) => {
            const center: [number, number] = [chartWidth/2, chartHeight/2]

            // Draw the slice
            canvas.fillStyle = item.color??defaultColor;
            const currentArcEnd = lastArcEnd + (item.value/sumValue)*2*Math.PI
            const ArcCenter = (currentArcEnd-lastArcEnd)/2 + lastArcEnd
            canvas.beginPath()
            canvas.moveTo(...center)
            canvas.arc(center[0], center[1], Math.min(chartWidth, chartHeight) / 3, lastArcEnd, ArcCenter)
            canvas.arc(center[0], center[1], Math.min(chartWidth, chartHeight) / 3,  ArcCenter, currentArcEnd)
            canvas.fill()
            canvas.closePath()
            canvas.fillStyle = textColor
            canvas.font = `${fontWeight} ${fontSize} ${fontFamily}`
            let valueLabel = item.value/sumValue > minimumValueLabelSize?String(valueLabelType === 'face'?item.value:Math.round(item.value/sumValue*100)+'%'):null;
            let itemLabel = item.value/sumValue > minimumLabelSize? item.label:null;
            const location = getText(Math.min(chartWidth, chartHeight) / 3 + labelGapWidth, center, ArcCenter)
            if(location[0] * 2 < chartWidth) location[0] -= canvas.measureText(itemLabel).width; // Left
            if(itemLabel && valueLabel) {
                const lineHeight = parseFloat(fontSize); // Adjust based on font size
                canvas.fillText(itemLabel, location[0], location[1] - (lineHeight / 2));
                canvas.fillText(valueLabel, location[0], location[1] + (lineHeight / 2));
            }
            else if(itemLabel) canvas.fillText(itemLabel, location[0], location[1]);
            else if(valueLabel) canvas.fillText(valueLabel, location[0], location[1]);
            lastArcEnd = currentArcEnd;
        });
        imageURL = canvasElement.toDataURL(imageURLtype)
    }
    onMount(renderCanvas)
</script>
<canvas {height} {width} bind:this={canvasElement}/>