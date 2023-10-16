"use strict";

///////////////
//FUNCTIONS
/////////////

//CALCULA LOS DIVISORES DEL NÚMERO QUE SE LE PASA

function divisores(n){
	
	//CREAMOS UN PÁRRAFO CON INFORMACIÓN
	divResultado.innerHTML = "<p>Divisores de "+n+"</p>";

	for(let i = 1; i <= n; i++){
        if(n % i == 0){
           console.log(i);
			divResultado.innerHTML += "<p>" + i + "</p>";
        }
    }
}

////////
//MAIN
///////

let divResultado = document.getElementById("divResultado");

//BUCLE PARA HACER COMPROBACIONES AL NUMERO QUE METE EL USUARIO
let n = -1;
while(n != 0){
	n = prompt("Introduzca un número", 0); //EL VALOR POR DEFECTO SERÁ 0
	if (n=="") {
		divResultado.innerHTML = "<p> Debe introducir un dato </p>";
		break;
	}
	n = Number(n);
	if (isNaN(n)) { //NaN = is not a number
		divResultado.innerHTML = "<p> Debe introducir un número </p>";
		break;
	}

	if (n==0) { 
		divResultado.innerHTML = "<p> Introdujo 0 </p>";
		break;
	}
	divisores(n);
}