export class MathUtil{
    public static PrintMathTable(value:number):string{
        let tempStr:string = '';
        for(let i :number = 1;i<=10;i++){
            tempStr += `${value} * ${i} = ${value*i} <br> `
        }
        tempStr += `<br>`;
        return tempStr;
    }
}