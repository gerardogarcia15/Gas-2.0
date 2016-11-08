//SISTEMA DE INSCRIPCIÓN CIRCUITO INTERNACIONAL DE TENIS.

function myFunction() { 
}//Fin funcion

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        var codigoJugador = e.values[13];
        
        // El sunto del email
        var asunto = "CONFIRMACION DE INSCRIPCION :" + nombre;
    
        // EmailBody es para aquellos dispositivos que no pueden representar HTML, es texto sin formato
        var cuerpoEmail =  " Enorabuena su inscripcion se ha completado correctamente. <i>" + timestamp + "</i>" + 
                        "<img src= https://upload.wikimedia.org/wikipedia/commons/f/fe/L%C3%ADnea_horizontal_1.jpg >"+
                        "Los detalles de la inscripcion son: " +
                        "<h4>NOMBRE:</h4>" + nombre + 
                        "<h4>APELLIDO:</h4>" + apellido + 
                        "<h4>SEXO:</h4>" + sexo + 
                        "<h4>FECHA DE NACIMIENTO:</h4>" + fechaNacimiento + 
                        "<h4>DNI:</h4>" + dni + 
                        "<h4>DIRECCION:</h4>" + direccion + 
                        "<h4>CIUDAD:</h4>" + ciudad + 
                        "<h4>PROVINCIA:</h4>" + provincia + 
                        "<h4>CODIGO POSTAL:</h4>" + codigoPostal + 
                        "<h4>PAIS:</h4>" + pais + 
                        "<h4>TELEFONO:</h4>" + telefono + 
                        "<h4>EMAIL:</h4>" + email + 
                        "<h4>CODIGO ATP:</h4>" + codigoJugador +
                        "<img src= http://www.gptcatennis.org/images/uploaded/AtpCertified.png >";      
        
        // html es para aquellos dispositivos que puedan representar HTML
        // Hoy en día casi todos los dispositivos puedan representar HTML
        var htmlBody =  " Enorabuena su inscripcion se ha completado correctamente. <i>" + timestamp + "</i>" + 
                        "<img src= https://upload.wikimedia.org/wikipedia/commons/f/fe/L%C3%ADnea_horizontal_1.jpg >"+
                        "Los detalles de la inscripcion son: " +
                        "<h4>NOMBRE:</h4>" + nombre + 
                        "<h4>APELLIDO:</h4>" + apellido + 
                        "<h4>SEXO:</h4>" + sexo + 
                        "<h4>FECHA DE NACIMIENTO:</h4>" + fechaNacimiento + 
                        "<h4>DNI:</h4>" + dni + 
                        "<h4>DIRECCION:</h4>" + direccion + 
                        "<h4>CIUDAD:</h4>" + ciudad + 
                        "<h4>PROVINCIA:</h4>" + provincia + 
                        "<h4>CODIGO POSTAL:</h4>" + codigoPostal + 
                        "<h4>PAIS:</h4>" + pais + 
                        "<h4>TELEFONO:</h4>" + telefono + 
                        "<h4>EMAIL:</h4>" + email + 
                        "<h4>CODIGO ATP:</h4>" + codigoJugador +
                        "<img src= http://www.gptcatennis.org/images/uploaded/AtpCertified.png >";    
                            
        // Más información para las opciones avanzadas Parámetros
        // https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String,Object)
        var opcionesAvanzadas = { Nombre: "Formulario:   Gerardo Garcia", htmlBody: htmlBody };
    
        // Esta instrucción se envía el correo electrónico
       
       
       // MailApp.sendEmail(email,asunto, cuerpoEmail, opcionesAvanzadas);
                        // Send an email with a file from Google Drive attached as a PDF.
                        
                        
                        
 var file = DriveApp.getFileById("0B3TgBSO32OD-QzQwOGtZa0F1WkU");
 //No funciona para convertir //var adjunto = DocsList.getFileById(id).getAs('application/pdf');
  var adjunto = file.getAs('application/pdf');
  adjunto     
     
if( codigoJugador <= 250 ){
      GmailApp.sendEmail(email, asunto , 'Por favor revise el documento.', { 
       attachments: [adjunto],
         name: 'ATP250'});
}//fin si


var fale = DriveApp.getFileById("0B3TgBSO32OD-QzQwOGtZa0F1WkU");
 //No funciona para convertir //var adjunto = DocsList.getFileById(id).getAs('application/pdf');
  var adjunta = fale.getAs('application/pdf');
  adjunto 

if( codigoJugador > 250 && codigoJugador <=500 ){
      GmailApp.sendEmail(email, asunto , 'Por favor revise el documento.', { 
       attachments: [adjunta],
       name: 'ATP250'});
       
        GmailApp.sendEmail(email, asunto , 'Por favor revise el documento.', { 
       attachments: [adjunta],
       name: 'ATP500'});
}//fin si



    var fole = DriveApp.getFileById("0B3TgBSO32OD-QzQwOGtZa0F1WkU");
     //No funciona para convertir //var adjunto = DocsList.getFileById(id).getAs('application/pdf');
      var adjunti = fole.getAs('application/pdf');
      adjunto 

    
    if( codigoJugador > 500 && codigoJugador <=1000 ){
          GmailApp.sendEmail(email, asunto , 'Por favor revise el documento.', { 
           attachments: [adjunti],
           name: 'ATP250'});
           
            GmailApp.sendEmail(email, asunto , 'Por favor revise el documento.', { 
           attachments: [adjunti],
           name: 'ATP500'});
           
           GmailApp.sendEmail(email, asunto , 'Por favor revise el documento.', { 
           attachments: [adjunti],
           name: 'ATP1000'});
    }//fin si
    
    }//fin funcion


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Recorrer los "Codigos Registrados" para comprobar si el codigo del jugador se encuentra registrado en la base de datos
    function compararCodigos(e) {
    
          var codigoJugador = e.values[13];
      
          var positivo =0;
          // La "spreadsheet" activa, desde cuyo menú se disparó el script
          var hojaDeCalculo = SpreadsheetApp.getActive();
          
          // La hoja llamada Hoja 1.
          var hoja1 = hojaDeCalculo.getSheetByName('CodigosJugadores');
          
          // El rango A5:B10, es decir, desde la fila 5 y la columna 1,
          // de 6 filas de alto y 2 columnas de ancho
          var codigoBaseDatos = hoja1.getRange('A1:A30').getValue();
          
          //For para recorrer la coluna de codigos y comparar
          for (var x = 0  ;    x <   codigoBaseDatos.getValues().length   ; x++  ) {
      
               if ( (codigoJugador) == (codigoBaseDatos.getValues()[x])  ){
                           MailApp.sendEmail("gerardogarcia.15@campuscamara.es","Asunto","......");     
               }//fin si
          }//fin para         
    }//Fin funcion



