"use strict"

const menor = (a,b,c) => {
	if(a<=b && a<=c)return a;
	if(a<=b && a>=c)return c;
	if(a>=b && b<=c)return b;
	if(a>=b && b>=c)return c;
}

console.log(menor(1,2,3));

