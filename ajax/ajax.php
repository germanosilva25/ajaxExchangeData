<?php
require_once __DIR__.'/../model/Usuarios.php';

if ($_POST['method']){

$verifica = $_POST['method'];	
	$usuario = new Usuarios();
	if (method_exists($usuario, $verifica))
		$usuario->$verifica($_POST['data']);
	else
		echo "função inexistente";
	
}

?>

