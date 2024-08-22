<script lang="ts">
	import { BarChart, PieChart } from "$lib";
	import { sum, type dataType } from "$lib/utils.js";

    let data: dataType[] = [
        {
            value: 22,
            label: 'A',
            color: '#f99'
        },
        {
            value: 27,
            label: 'B',
            color: '#9c9'
        },
        {
            value: 12,
            label: 'C',
            color: '#9cf'
        },
        {
            value: 9,
            label: 'D',
            color: '#fc9'
        },
    ]
    let data2: dataType[] = [
        {
            value: 42,
            label: 'A'
        },
        {
            value: 63,
            label: 'B'
        },
        {
            value: 12,
            label: 'C'
        },
    ]
    let data3: dataType[] = [
        {
            value: 80,
            label: 'Red',
            color: 'red'
        },
        {
            value: 5,
            label: 'Green',
            color: 'green'
        },
        {
            value: 15,
            label: 'Blue',
            color: 'blue'
        },
    ]
    let data4: dataType[] = [
        {
            value: 22,
            label: 'A',
            color: '#f99'
        },
        {
            value: 27,
            label: 'B',
            color: '#9c9'
        },
        {
            value: 12,
            label: 'C',
            color: '#9cf'
        },
        {
            value: 9,
            label: 'D',
            color: '#fc9'
        },
        {
            value: 18,
            label: 'E',
            color: '#ffc'
        },
        {
            value: 8,
            label: 'F',
            color: '#f9c'
        },
        {
            value: 2,
            label: 'G',
            color: '#99c'
        },
        {
            value: 4,
            label: 'H',
            color: '#c9f'
        },
    ]
    function clone(data: any[]): any[] {
        return [...data]
    }
</script>
<h1>Chart Samples</h1>
<details open>
<summary>Bar Charts</summary>
<BarChart data={clone(data)}/>
<details id="collapsePoint-bar">
    <summary>collapsePoint</summary>
    <p>When collapsePoint is set, values after the collapsePoint will be grouped into the "other" category. For instance, if collapsePoint is 5, the fifth value in the list and all others after will be grouped into the other category. It is recommended that <a href='#sortType-bar'>sortType</a> is set to desc. See also: <a href='#otherColor-bar'>otherColor</a>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>2</code></h3>
            <BarChart data={clone(data)} collapsePoint={2} sortType="desc"/>
        </div>
        <div class='chart'>
            <h3><code>Infinity</code></h3>
            <BarChart data={clone(data)} collapsePoint={Infinity} sortType="desc"/>
        </div>
    </div>
</details>
<details id="defaultColor-bar">
    <summary>defaultColor</summary>
    <p>defaultColor changes the color of all elements that do not have a specified color. It defaults to <code>gray</code></p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>gray</code></h3>
            <BarChart data={clone(data2)} defaultColor="gray"/>
        </div>
        <div class='chart'>
            <h3><code>lime</code></h3>
            <BarChart data={clone(data2)} defaultColor="lime"/>
        </div>
        <div class='chart'>
            <h3><code>#cde</code></h3>
            <BarChart data={clone(data2)} defaultColor="#cde"/>
        </div>
        <div class='chart'>
            <h3><code>rgb(250, 200, 150)</code></h3>
            <BarChart data={clone(data2)} defaultColor="rgb(250, 200, 150)"/>
        </div>
    </div>
</details>
<details id="fontFamily-bar">
    <summary>fontFamily</summary>
    <p>Sets the font family. It defaults to <code>sans-serif</code>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>sans-serif</code></h3>
            <BarChart data={clone(data)} fontFamily="sans-serif"/>
        </div>
        <div class='chart'>
            <h3><code>serif</code></h3>
            <BarChart data={clone(data)} fontFamily="serif"/>
        </div>
        <div class='chart'>
            <h3><code>cursive</code></h3>
            <BarChart data={clone(data)} fontFamily="cursive"/>
        </div>
    </div>
</details>
<details id="fontSize-bar">
    <summary>fontSize</summary>
    <p>Sets the font size. It defaults to <code>[height/20]px</code>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>12pt</code></h3>
            <BarChart data={clone(data)} fontSize='12pt'/>
        </div>
        <div class='chart'>
            <h3><code>24pt</code></h3>
            <BarChart data={clone(data)} fontSize='24pt'/>
        </div>
        <div class='chart'>
            <h3><code>32pt</code></h3>
            <BarChart data={clone(data)} fontSize='32pt'/>
        </div>
    </div>
</details>
<details id="fontWeight-bar">
    <summary>fontWeight</summary>
    <p>Adjusts font weight. It defaults to <code>normal</code>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>200</code></h3>
            <BarChart data={clone(data)} fontWeight=200/>
        </div>
        <div class='chart'>
            <h3><code>normal</code></h3>
            <BarChart data={clone(data)} fontWeight="normal"/>
        </div>
        <div class='chart'>
            <h3><code>bold</code></h3>
            <BarChart data={clone(data)} fontWeight=bold/>
        </div>
    </div>
</details>
<details id="gapWidth-bar">
    <summary>gapWidth</summary>
    <p>Adjusts width of the gap between each bar. Defaults to <code>[width]/20</code></p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>0</code></h3>
            <BarChart data={clone(data)} gapWidth={0}/>
        </div>
        <div class='chart'>
            <h3><code>25</code></h3>
            <BarChart data={clone(data)} gapWidth={25}/>
        </div>
        <div class='chart'>
            <h3><code>50</code></h3>
            <BarChart data={clone(data)} gapWidth={50}/>
        </div>
    </div>
</details>
<details id="maxY-bar">
    <summary>maxY</summary>
    <p>Adjusts the value at the top of the chart. If left empty, it is set so that the largest bar fills the chart</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>Sum of all values</code></h3>
            <BarChart data={clone(data3)} maxY={sum(...data3.map((d)=>d.value))} valueLabelType='percent'/>
        </div>
        <div class='chart'>
            <h3><code>30</code></h3>
            <BarChart data={clone(data)} maxY={30}/>
        </div>
    </div>
</details>
<details id='roundBars-bar'>
    <summary>roundBars</summary>
    <p>roundBars adjusts the roundness of the tops of each bar. Setting the value to 0 results in a non-rounded top. Setting it to infinity results in each bar being completely rounded. The default is <code>[height]/30</code></p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>0</code></h3>
            <BarChart data={clone(data)} roundBars={0}/>
        </div>
        <div class='chart'>
            <h3><code>20</code></h3>
            <BarChart data={clone(data)} roundBars={20}/>
        </div>
        <div class='chart'>
            <h3><code>Infinity</code></h3>
            <BarChart data={clone(data)} roundBars={Infinity}/>
        </div>
    </div>
</details>
<details id='otherColor-bar'>
    <summary>otherColor</summary>
    <p>Sets the color of the "other" category when applied. Defaults to <code>gray</code> </p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>gray</code></h3>
            <BarChart data={clone(data)} otherColor="gray" collapsePoint={3}/>
        </div>
        <div class='chart'>
            <h3><code>red</code></h3>
            <BarChart data={clone(data)} otherColor="red" collapsePoint={3}/>
        </div>
        <div class='chart'>
            <h3><code>#cef</code></h3>
            <BarChart data={clone(data)} otherColor="#cef" collapsePoint={3}/>
        </div>
    </div>
</details>
<details id='sortType-bar'>
    <summary>sortType</summary>
    <p>sortType adjusts the order of the items. The possible values are <code>asc</code> (largest is on the right), <code>desc</code> (largest is on the left), and the default <code>none</code> value. The <code>desc</code> value is recommended when the <code>collapsePoint</code> parameter is used. Note than sortType changes the data.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>asc</code></h3>
            <BarChart data={clone(data)} sortType="asc"/>
        </div>
        <div class='chart'>
            <h3><code>desc</code></h3>
            <BarChart data={clone(data)} sortType="desc"/>
        </div>
        <div class='chart'>
            <h3><code>none</code></h3>
            <BarChart data={clone(data)} sortType="none"/>
        </div>
    </div>
</details>
<!-- Value Labels -->
<details id='valueLabelType-bar'>
    <summary>valueLabelType</summary>
    <p>valueLabelType changes the text in the valueLabel from 'face' values, where the value is labelled, to 'percent' values, where the percent is labeled. Default is <code>face</code></p>
    <div class='chartRegion'>
    <div class='chart'>
    <h3><code>Face</code></h3>
    <BarChart data={clone(data)} valueLabelType="face"/>
    </div>
    <div class='chart'>
    <h3><code>Percent</code></h3>
    <BarChart data={clone(data)} valueLabelType="percent"/>
    </div>
    </div>
</details>
<details id='valueLabelLocation-bar'>
    <summary>valueLabelLocation</summary>
    <p>valueLabelLocation changes the location of the valueLabel from the top of the chart (the default, <code>top</code>) to above the bar (<code>outside</code>) or to inside the bar (<code>inside</code>). If you do not want a value label, use the <code>none</code> option instead.</p>
    <div class='chartRegion'>
    <div class='chart'>
    <h3><code>inside</code></h3>
    <BarChart data={clone(data)} valueLabelLocation="inside"/>
    </div>
    <div class='chart'>
    <h3><code>top</code></h3>
    <BarChart data={clone(data)} valueLabelLocation="top"/>
    </div>
    <div class='chart'>
    <h3><code>outside</code></h3>
    <BarChart data={clone(data)} valueLabelLocation="outside"/>
    </div>
    <div class='chart'>
    <h3><code>none</code></h3>
    <BarChart data={clone(data)} valueLabelLocation="none"/>
    </div>
    </div>
</details>
<h3>Cool Designs</h3>
<div class='chartRegion'>
    <div class='chart'>
        <BarChart data={clone(data)} gapWidth={0} roundBars={0}/>
        <h3><code>gapWidth = 0<br/>roundBars = 0</code></h3>
    </div>
    <div class='chart'>
        <BarChart data={clone(data4)} otherColor="#cde" collapsePoint={5} sortType="desc"/>
        <h3><code>otherColor = #9cf<br/>collapsePoint = 5<br/>sortType = desc</code></h3>
    </div>
</div>
</details>
<details open>
<summary>Pie Charts</summary>
<PieChart data={clone(data)}/>
<details id="collapsePoint-pie">
    <summary>collapsePoint</summary>
    <p>When collapsePoint is set, values after the collapsePoint will be grouped into the "other" category. For instance, if collapsePoint is 5, the fifth value in the list and all others after will be grouped into the other category. It is recommended that <a href='#sortType-pie'>sortType</a> is set to desc. See also: <a href='#otherColor-pie'>otherColor</a>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>2</code></h3>
            <PieChart data={clone(data)} collapsePoint={2} sortType="desc"/>
        </div>
        <div class='chart'>
            <h3><code>Infinity</code></h3>
            <PieChart data={clone(data)} collapsePoint={Infinity} sortType="desc"/>
        </div>
    </div>
</details>
    <details id="defaultColor-pie">
    <summary>defaultColor</summary>
    <p>defaultColor changes the color of all elements that do not have a specified color. It defaults to <code>gray</code></p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>gray</code></h3>
            <PieChart data={clone(data2)} defaultColor="gray"/>
        </div>
        <div class='chart'>
            <h3><code>lime</code></h3>
            <PieChart data={clone(data2)} defaultColor="lime"/>
        </div>
        <div class='chart'>
            <h3><code>#cde</code></h3>
            <PieChart data={clone(data2)} defaultColor="#cde"/>
        </div>
        <div class='chart'>
            <h3><code>rgb(250, 200, 150)</code></h3>
            <PieChart data={clone(data2)} defaultColor="rgb(250, 200, 150)"/>
        </div>
    </div>
</details>
<details id="fontFamily-pie">
    <summary>fontFamily</summary>
    <p>Sets the font family. It defaults to <code>sans-serif</code>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>sans-serif</code></h3>
            <PieChart data={clone(data)} fontFamily="sans-serif"/>
        </div>
        <div class='chart'>
            <h3><code>serif</code></h3>
            <PieChart data={clone(data)} fontFamily="serif"/>
        </div>
        <div class='chart'>
            <h3><code>cursive</code></h3>
            <PieChart data={clone(data)} fontFamily="cursive"/>
        </div>
    </div>
</details>
<details id="fontSize-pie">
    <summary>fontSize</summary>
    <p>Sets the font size. It defaults to <code>[height/20]px</code>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>12pt</code></h3>
            <BarChart data={clone(data)} fontSize='12pt'/>
        </div>
        <div class='chart'>
            <h3><code>24pt</code></h3>
            <BarChart data={clone(data)} fontSize='24pt'/>
        </div>
        <div class='chart'>
            <h3><code>32pt</code></h3>
            <BarChart data={clone(data)} fontSize='32pt'/>
        </div>
    </div>
</details>
<details id="fontWeight-pie">
    <summary>fontWeight</summary>
    <p>Adjusts font weight. It defaults to <code>normal</code>.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>200</code></h3>
            <PieChart data={clone(data)} fontWeight=200/>
        </div>
        <div class='chart'>
            <h3><code>normal</code></h3>
            <PieChart data={clone(data)} fontWeight="normal"/>
        </div>
        <div class='chart'>
            <h3><code>bold</code></h3>
            <PieChart data={clone(data)} fontWeight=bold/>
        </div>
    </div>
</details>
<details id="labelGapWidth-pie">
    <summary>labelGapWidth</summary>
    <p>Adjusts width of the gap between each bar. Defaults to <code>[height]/60</code></p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>0</code></h3>
            <PieChart data={clone(data)} labelGapWidth={0}/>
        </div>
        <div class='chart'>
            <h3><code>20</code></h3>
            <PieChart data={clone(data)} labelGapWidth={20}/>
        </div>
        <div class='chart'>
            <h3><code>40</code></h3>
            <PieChart data={clone(data)} labelGapWidth={40}/>
        </div>
    </div>
</details>
<details id="minumumLabelSize-pie">
    <summary>minimumLabelSize</summary>
    <p>Sets what size a pie slice (as a decimal between 0 and 1) has to be to have a label. Defaults to <code>0.05</code></p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>0</code></h3>
            <PieChart data={clone(data4)} minimumLabelSize={0}/>
        </div>
        <div class='chart'>
            <h3><code>0.1</code></h3>
            <PieChart data={clone(data4)} minimumLabelSize={0.1}/>
        </div>
        <div class='chart'>
            <h3><code>1</code></h3>
            <PieChart data={clone(data4)} minimumLabelSize={1}/>
        </div>
    </div>
</details>
<details id="minimumValueLabelSize-pie">
    <summary>minimumValueLabelSize</summary>
    <p>Sets what size a pie slice (as a decimal between 0 and 1) has to be to have a label. Defaults to <code>0.1</code></p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>0</code></h3>
            <PieChart data={clone(data4)} minimumValueLabelSize={0}/>
        </div>
        <div class='chart'>
            <h3><code>0.1</code></h3>
            <PieChart data={clone(data4)} minimumValueLabelSize={0.1}/>
        </div>
        <div class='chart'>
            <h3><code>1</code></h3>
            <PieChart data={clone(data4)} minimumValueLabelSize={1}/>
        </div>
    </div>
</details>
<details id='otherColor-pie'>
    <summary>otherColor</summary>
    <p>Sets the color of the "other" category when applied. Defaults to <code>gray</code> </p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>gray</code></h3>
            <PieChart data={clone(data)} otherColor="gray" collapsePoint={3}/>
        </div>
        <div class='chart'>
            <h3><code>red</code></h3>
            <PieChart data={clone(data)} otherColor="red" collapsePoint={3}/>
        </div>
        <div class='chart'>
            <h3><code>#cef</code></h3>
            <PieChart data={clone(data)} otherColor="#cef" collapsePoint={3}/>
        </div>
    </div>
</details>
<details id='sortType-pie'>
    <summary>sortType</summary>
    <p>sortType adjusts the order of the items. The possible values are <code>asc</code> (largest is on the right), <code>desc</code> (largest is on the left), and the default <code>none</code> value. The <code>desc</code> value is recommended when the <code>collapsePoint</code> parameter is used. Note than sortType changes the data.</p>
    <div class='chartRegion'>
        <div class='chart'>
            <h3><code>asc</code></h3>
            <PieChart data={clone(data)} sortType="asc"/>
        </div>
        <div class='chart'>
            <h3><code>desc</code></h3>
            <PieChart data={clone(data)} sortType="desc"/>
        </div>
        <div class='chart'>
            <h3><code>none</code></h3>
            <PieChart data={clone(data)} sortType="none"/>
        </div>
    </div>
</details>
<details id='valueLabelType-pie'>
    <summary>valueLabelType</summary>
    <p>valueLabelType changes the text in the valueLabel from 'face' values, where the value is labelled, to 'percent' values, where the percent is labeled. Default is <code>face</code></p>
    <div class='chartRegion'>
    <div class='chart'>
    <h3><code>Face</code></h3>
    <PieChart data={clone(data)} valueLabelType="face"/>
    </div>
    <div class='chart'>
    <h3><code>Percent</code></h3>
    <PieChart data={clone(data)} valueLabelType="percent"/>
    </div>
    </div>
</details>
</details>
<style>
    *:not(code) {
        font-family: Helvetica, sans-serif;
    }
    summary {
        font-size: 32px;
        font-weight: 700;
    }
    .chartRegion {
        display: flex;
        width: 100%;
        justify-content: center;
        overflow-x: scroll;
        gap: 24px;
    }
    code {
        background-color: #eee;
        border-radius: 5px;
        padding: 2px;
        display: inline;
    }
    h3 *, h3{
        font-size: 24px;
        text-align: center;
        display: block;
    }
    p {
        margin: 10px;
    }
</style>