function validar() {

	var correo;
	var pass;

	correo = document.getElementById("mail").value;
	pass = document.getElementById("pass").value;

	expresion = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	if (correo === "" || pass === "") 
	{
		alert("Todos los campos son obligatorios");
		return false;
	}

	else if (!expresion.test(correo)) 
	{
		alert("El correo no es correcto");
		return false;
	}
	

}