//Usuario ingresa nombre
var nombre, numero;
nombre=prompt("Ingresá tu nombre");
alert("Hola "+ nombre +"!");

//Usuario ingresa numero y se suma a otro
var a=5;
numero=prompt("Ingrese un número");
numero=parseInt(numero);
var total= a+numero;
alert("La suma de su número ingresado y 5 es: "+total);

//Usuario ingresa número y se resta a otro
numero=prompt("Ingrese otro número");
numero=parseInt(numero);
var total=a-numero;
alert("La resta entre 5 y su número ingresado es:" + total);


//Usuario ingresa dos números y se suman 
a=prompt("Ingrese un número");
var b=prompt("Ingrese otro número");
a=parseInt(a);
b=parseInt(b);
total=a+b;
alert("El total es: "+ total);
