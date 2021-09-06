<?php


class Db{
protected $servername = "localhost";
protected $username = "root";
protected $password = "";

function connect(){
     try {
         $conn = new PDO("mysql:host=$this->servername;dbname=schedule", $this->username, $this->password);
         // set the PDO error mode to exception
         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         echo "Conectado com sucesso";
       } catch(PDOException $e) {
         echo "Connection failed: " . $e->getMessage();
       }
 }
    
}


?>
