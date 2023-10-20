<?php 
	$nombre = $_POST['name'];
	$email = $_POST['email'];
	$bussines = $_POST['name-company'];
	$affair = $_POST['affair'];
	$phone = $_POST['phone']
	$mensaje = "Nombre: ".$nombre."\nEmpresa: ".$bussines."\nEmail: ".$email."\nTeléfono: ".$phone"\nMensaje:\n\n".$_POST['message'];


	if(mail('info@mgsolutions.com.ar', $affair, $mensaje)){
		echo  '<script language="javascript"> alert ("Su consulta fue enviada. Responderemos en breve."); window.location.href="../home.html#contact" </script>';
	} else {
        echo '<script language="javascript"> alert ("Ocurrio un error inesperado, intente de nuevo mas tarde"); window.location.href="../home.html#contact" </script>';
}
 ?>



