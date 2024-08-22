// These functions are not designed to be available for the user.
export interface dataType {
    label: string,
    value: number,
    color?: string
}
export function sum(...data: number[]){
    let sum = 0;
    data.forEach((value)=>sum+=value)
    return sum
}