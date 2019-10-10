<?php
        header("Content-Type: text/html; charset=utf-8");
        $subject = 'Сообщение с сайта';
        $name = $_POST['name'];
        $phone = $_POST['tel'];
        $message = 'ФИО: ' . $name . '<br> Номер телефона: ' . $phone;
        $to = 'phob13@yandex.ru';
        $from = 'admin@phobisnice.beget.tech';
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: $from\r\n";
        mail($to, $subject, $message, $headers);
?>
