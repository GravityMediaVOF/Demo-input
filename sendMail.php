<?php
$email = $_POST['email'];
$subject = "Persoonlijke demo - " . $_POST['bedrijfsnaam'];
$name = $_POST['name'];
$from_name = "Company Fuel";
$form_mail = "info@companyfuel.nl";
$demoId = $_POST['newId'];


$headers = "From: {$from_name} <{$form_mail}>\r\n";
($cc != FALSE) ? $headers .= "CC: {$cc}\r\n" : NULL;
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$mail_head = 'Header';
$content = "Je email: $email, je naam: $name, je persoonlijke demo: https://demo.companyfuel.nl?id=$demoId";
$mail_footer = 'Footer';

$mail_content = $mail_head . "" . $content . "" . $mail_footer;
mail($email, $subject, $mail_content, $headers);
