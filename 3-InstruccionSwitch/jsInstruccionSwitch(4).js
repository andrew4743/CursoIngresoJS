function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias")
			break;
		case "Febrero":
			alert("Tiene 28 dias")
			break;
			default:
				alert("Tiene 31 dias")
				alert (mesDelAño);
				break;
	}
	
	



}//FIN DE LA FUNCIÓN