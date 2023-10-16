"use strict"
const media = (...param)=>{
    let suma=0;
    for (let num of param) {
        suma+=num;
    }
    if(param.length==0) return null;
    return suma/param.length;
}
console.log(media([2,5,7,8,9,2]));