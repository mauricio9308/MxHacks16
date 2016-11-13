function validar() {

	var nombre;
	var apellidopaterno;
	var apellidomaterno;
	var correo;
	var pass;
	

	nombre = document.getElementById("nombre").value;
	apellidopaterno = document.getElementById("apellidopaterno").value;   
	apellidomaterno = document.getElementById("apellidomaterno").value;      
	correo = document.getElementById("correo").value;
	pass = document.getElementById("pass").value;
	pass2 = document.getElementById("pass2").value; 	
	  

	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === "" || apellidomaterno === "" || apellidopaterno === "" ||  correo === "" || pass === "") {
		alert("Todos los campos son obligatorios");
		return false;
	}

	if (nombre <= 0 || nombre >= 0) {
		alert("El nombre no puede contener numeros");
		return false;
	}

	if (apellidopaterno <= 0 || apellidopaterno >= 0) {
		alert("El apellido paterno no puede contener numeros");
		return false;
	}

	if (apellidomaterno <= 0 || apellidomaterno >= 0) {
		alert("El apellido materno no puede contener numeros");
		return false;
	}

	 
	if (!expresion.test(correo)) 
	{
		alert("El correo no es correcto");
		return false;
	}


	if (pass != pass2) 
	{
		alert("Las contraseñas no son iguales");
		return false;
	}

	

	var largopass = pass.length;

	if (largopass <= 3) 
	{
		alert("La contraseña es muy corta");
		return false;
	}


}