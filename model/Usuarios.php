<?php
require_once __DIR__.'/../db/db.php';
require_once __DIR__.'/Usuarios.php';



class Usuarios extends Db{

protected $id;
protected $nomeDeUsuario;
protected $nome;
protected $sobrenome;

    


    function verificaNome($nome){
    	echo "nome verificado, ", $nome;
    	return;
        
    }

    function verificaSenha($nome){
    	echo "senha verificada, ", $nome;
    	return;
        
    }

    function getId(){
        echo "meu id é 1";
    }

}

?>
