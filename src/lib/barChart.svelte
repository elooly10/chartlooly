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
    export let gapWidth = width / 50
    export let maxY: number = null;
    export let otherColor = 'gray';
    export let roundBars: number = height / 30
    export let sortType: 'asc' | 'desc' | 'none' = 'none';
    export let textColor = 'black';
    export let valueLabelLocation: 'top' | 'outside' | 'inside' | 'none' = 'top'
    export let valueLabelType: 'percent' | 'face' = 'face'
    export let imageURL = null;
    export let imageURLtype = 'PNG'
    let canvasElement: HTMLCanvasElement;
    function renderCanvas() {
        function drawBar(canvas: CanvasRenderingContext2D, x: number, y: number, width: any, height: any, radius: number) {
            canvas.beginPath();
            canvas.moveTo(x + radius, y);
            canvas.lineTo(x + width - radius, y);
            canvas.quadraticCurveTo(x + width, y, x + width, y + radius);
            canvas.lineTo(x + width, y + height);
            canvas.lineTo(x, y + height);
            canvas.lineTo(x, y + radius);
            canvas.quadraticCurveTo(x, y, x + radius, y);
            canvas.closePath();
            canvas.fill();
        }
        if(!canvasElement.getContext) return false;
        const canvas = canvasElement.getContext('2d');
        if(!canvas) return false;
        const chartHeight = canvasElement.height;
        const chartWidth = canvasElement.width;
        
        // Clear the canvas
        canvas.clearRect(0, 0, chartWidth, chartHeight);
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
        const maxValue = maxY??Math.max(...data.map(item => item.value));
        const sumValue = sum(...data.map(item => item.value))
        const barWidth = (chartWidth - (data.length - 1) * gapWidth) / data.length;
        // Draw the bars
        data.forEach((item: dataType, index: number) => {
            
            const barHeight = (item.value / maxValue) * (chartHeight - 10);
            const x = index * (barWidth + gapWidth);
            const y = chartHeight - barHeight;

            // Draw the bar
            canvas.fillStyle = item.color??defaultColor;
            drawBar(canvas, x, y, barWidth, barHeight, Math.min(barWidth / 2, roundBars));

            // Draw the label
            canvas.font = `${fontWeight} ${fontSize} ${fontFamily}`
            canvas.fillStyle = textColor;
            canvas.textAlign = 'center';
            canvas.fillText(item.label, x + barWidth / 2, chartHeight - chartHeight / 30); // Label
            /* Value Label */
            let text = String(valueLabelType === 'face'?item.value:Math.round(item.value/sumValue*100)+'%')
            // let measuredText = canvas.measureText(text)
            if(valueLabelLocation == 'inside' && barHeight > chartHeight / 7.5) canvas.fillText(text, x + barWidth / 2, chartHeight-barHeight+chartHeight/15)
            if(valueLabelLocation == 'top' || (valueLabelLocation == "outside" && barHeight + chartHeight / 7.5 > chartHeight)) canvas.fillText(text, x + barWidth / 2, chartHeight/10)
            if(valueLabelLocation == 'outside') canvas.fillText(text, x + barWidth / 2, chartHeight-barHeight-chartHeight/30)
        });

        // Draw the bottom line
        canvas.beginPath();
        canvas.moveTo(0, chartHeight);
        canvas.lineTo(chartWidth, chartHeight);
        canvas.strokeStyle = 'black';
        canvas.stroke();
        imageURL = canvasElement.toDataURL(imageURLtype)
    }
    onMount(renderCanvas)
</script>
<canvas {height} {width} bind:this={canvasElement}/>