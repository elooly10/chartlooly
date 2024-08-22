# Chartlooly
An easy-to-use charting package for Svelte. 

## `dataType`
```js
{
  label: string,
  value: number,
  color?: string
}
```
Note that the color is not nessacary, as defaultColor is a setting in both `barChart` and `pieChart`.
## `BarChart`
```html
<BarChart data:dataType[] height:number=500 width:number=500 .../>
```
## `PieChart`
```html
<PieChart data:dataType[] height:number=500 width:number=500 .../>
```
See more detailed instructions in the svelte app, avalible [here.](https://chartlooly.vercel.app)
