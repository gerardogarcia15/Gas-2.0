//SISTEMA DE INSCRIPCIÓN CIRCUITO INTERNACIONAL DE TENIS

function myFunction() { 
}//Fin funcion

//Enviar resumen de Respuestas AL JUGADOR dandole el ok de Inscripcion
function enviarEmailDeFormulario(e) {

	// Crear tantas variables como respuestas (columnas en la hoja de cálculo) que necesita para enviar
	var timestamp = e.values[0];
	var nombre = e.values[1];
	var apellido = e.values[2];
	var sexo = e.values[3];
    var fechaNacimiento = e.values[4];
    var dni = e.values[5];
    var direccion = e.values[6];
    var ciudad = e.values[7];
    var provincia = e.values[8];
    var codigoPostal = e.values[9];
    var pais = e.values[10];
    var telefono = e.values[11];
    var email = e.values[12];
    var codigoAtp = e.values[13];
	
	// El sunto del email
	var asunto = "CONFIRMACION DE INSCRIPCION :" + nombre;

    // EmailBody es para aquellos dispositivos que no pueden representar HTML, es texto sin formato
	var cuerpoEmail = " Enorabuena su inscripcion se ha completado correctamente. <i>" + timestamp + "</i>" + 
					"<br/><br/>Los detalles de la inscripcion son: " +
               "<br/><br/>NOMBRE:                 " + nombre + 
					"<br/>APELLIDO:               " + apellido + 
                    "<br/>SEXO:                   " + sexo + 
                    "<br/>FECHA DE NACIMIENTO:    " + fechaNacimiento + 
                    "<br/>DNI:                    " + dni + 
                    "<br/>DIRECCION:              " + direccion + 
                    "<br/>CIUDAD:                 " + ciudad + 
                    "<br/>PROVINCIA:              " + provincia + 
                    "<br/>CODIGO POSTAL:          " + codigoPostal + 
                    "<br/>PAIS:                   " + pais + 
                    "<br/>TELEFONO:               " + telefono + 
                    "<br/>EMAIL:                  " + email + 
					"<br/>CODIGO ATP:             " + codigoAtp +
                    "<img src= http://www.gptcatennis.org/images/uploaded/AtpCertified.png >" ;
	
	// html es para aquellos dispositivos que puedan representar HTML
    // Hoy en día casi todos los dispositivos puedan representar HTML
	var htmlBody =  " Enorabuena su inscripcion se ha completado correctamente. <i>" + timestamp + "</i>" + 
					"<br/><br/>Los detalles de la inscripcion son: " +
               "<br/><br/>NOMBRE:                 " + nombre + 
					"<br/>APELLIDO:               " + apellido + 
                    "<br/>SEXO:                   " + sexo + 
                    "<br/>FECHA DE NACIMIENTO:    " + fechaNacimiento + 
                    "<br/>DNI:                    " + dni + 
                    "<br/>DIRECCION:              " + direccion + 
                    "<br/>CIUDAD:                 " + ciudad + 
                    "<br/>PROVINCIA:              " + provincia + 
                    "<br/>CODIGO POSTAL:          " + codigoPostal + 
                    "<br/>PAIS:                   " + pais + 
                    "<br/>TELEFONO:               " + telefono + 
                    "<br/>EMAIL:                  " + email + 
					"<br/>CODIGO ATP:             " + codigoAtp +
                    "<img src= http://www.gptcatennis.org/images/uploaded/AtpCertified.png >"   ;               
	
    // Más información para las opciones avanzadas Parámetros
	// https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String,Object)
	var opcionesAvanzadas = { Nombre: "Formulario:   Gerardo Garcia", htmlBody: htmlBody };

	// Esta instrucción se envía el correo electrónico
	MailApp.sendEmail(email, asunto, cuerpoEmail, opcionesAvanzadas);

}//fin funcion