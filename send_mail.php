<?php
// ob_start();

// $to = "thierry@gravitymedia.nl, michel@companyfuel.nl, mike@gravitymedia.nl"; // this is your Email address
$to = "tom@gravitymedia.nl"; // this is your Email address
$from = "companyfuel@demo.nl"; // this is the sender's Email address
$subject = "Website-input post data";

$message = "";

$htmlContent = "<html><head><title>Website input data is vestuurd</title></head><body><h2>Website input data is vestuurd</h2><table> ";

foreach ($_POST['data'] as $key => $value) {
  $htmlContent .= "<tr><td>$key: </td><td>$value</td></tr>";
}

$htmlContent .= "</table></body></html>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From:" . $from;

mail($to, $subject, $htmlContent, $headers);
// echo $_POST['page'] . " content has been sent to thierry@gravitymedia.nl";
// print_r($htmlContent);

// header("Location: https://www.companyfuel.nl/bedanktpagina/"); exit;
// echo "<script type='text/javascript'>window.top.location='https://www.companyfuel.nl/bedanktpagina/';</script>"; exit;
// ob_end_flush();
?>
