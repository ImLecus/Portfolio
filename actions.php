<?php
    $myMail = "marcosgf2005@gmail.com";
    $name = $_POST["name"];
    $mail = $_POST["mail"];
    $message = $_POST["message"];
    if(empty($name) || empty($mail) || empty($message)){
        return;
    }
    else{
        $to = $mail;
        $subject = "Contacto del portafolio ($name)";
        $body = "Nuevo mensaje recibido desde el portafolio: \n
                Email: \n $mail, mensaje: \n $message";
        mail($to, $subject, $body);
    }
    
?>