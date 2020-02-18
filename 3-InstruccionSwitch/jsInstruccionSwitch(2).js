function mostrar()
{
//tomo la edad  
	var mesDelAño;
	mesDelAño= document.getElementById('mes').value;
	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
			alert("se viene el frio")
			break;
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("se viene el calor")
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "diciembre":
			alert("se viene algo")
			break;
	}

alert (mesDelAño);




}//FIN DE LA FUNCIÓN