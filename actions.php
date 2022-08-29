<?php
    $name = $_POST["name"];
    $mail = $_POST["mail"];
    $message = "Nombre: "+ $name + "\n Email: " + $mail + "\n\n" + $_POST["message"];

    if(mail("marcosgf2005@gmail.com","Mensaje del portafolio",$message)){
        echo "Mensaje enviado con éxito";
    }
?>