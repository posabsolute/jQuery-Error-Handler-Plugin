<?php

$to = "cedric.dugas@gmail.com";
$subject = 'A javascript error has been detected on '. $_GET['website'];
$message = 'Message: '. $_GET['message']. '<br />';
$message .= 'Url: '. $_GET['url']. '<br />';
$message .= 'Line: '. $_GET['line']. '<br />';

$headers = "From: ". $_GET['from'] ."\r\n"; // Or sendmail_username@hostname by default
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
mail($to, $subject, $message, $headers);
die("message sent")

?>
