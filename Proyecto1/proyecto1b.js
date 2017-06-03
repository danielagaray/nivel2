/*var respuesta=prompt("Queres seguir viendo la clase?");
if(respuesta=="si" || respuesta=="Si"){
	alert("Seguimos en clase");
}else{
	alert("Adiós!");
}*/

/*nombre=prompt("Ingresá tu nombre");

switch(nombre){
	case "camila":
		alert("Hola profe");
		break;
	default:
		alert("Hola "+nombre);
		break;
	}*/


/*for(var i;i<25;i++){
	console.log("Dar un paso");
}*/

var dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(i in dias){
	if(dias[i]=="Sábado" || dias[i]=="Domingo"){
		console.log("Atención! es: "+ dias[i]);
	}
}

