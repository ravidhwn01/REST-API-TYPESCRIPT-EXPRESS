export class StringUtil{
    public static printLength(str:string):number{
        return str.length;
    }
    public static printTriagle(str:string):string{
        let temp:string = '';
        for(let i:number = 0;i<=str.length-1;i++){
            for(let j:number = 0;j<=i;j++){
                temp +=`${str.charAt(j)}`
            }
            temp += `<br>`;
        }
        return temp;

    }

}

export class Draw{
    public static printArray(array:string[]){
        let fruits: string[]  = array; 

for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}

for(var i = 0; i < fruits.length; i++)
{ 
    console.log(fruits[i]); // output: Apple Orange Banana
}
const obj:Iuser = {
    name:"ravi dhawna",
    age:34,
    city:"jaipur"
}
console.log(obj)
    }
}
interface Iuser{
    name:string;
    age:number;
    city:string;

}

// export const user = (obj:Iuser) =>{
// let data:Iuser = obj;
//     console.log(data);


// }