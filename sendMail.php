<?php
$email = $_POST['email'];
$bedrijfsnaam = $_POST['bedrijfsnaam'];
$subject = "Je website demo staat klaar!";
$name = $_POST['name'];
$from_name = "Company Fuel";
$form_mail = "info@companyfuel.nl";
$demoId = $_POST['newId'];


$headers = "From: {$from_name} <{$form_mail}>\r\n";
($cc != FALSE) ? $headers .= "CC: {$cc}\r\n" : NULL;
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$mail_head = "Companyfuel";
$content = "<!DOCTYPE html>
<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>
<head>
    <meta charset='utf-8'> <!-- utf-8 works for most cases -->
    <meta name='viewport' content='width=device-width'> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv='X-UA-Compatible' content='IE=edge'> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name='x-apple-disable-message-reformatting'>  <!-- Disable auto-scale in iOS 10 Mail entirely -->
     <!-- The title tag shows in email notifications, like Android 4.4. -->

    <link href='https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Inter:200,300,400,500,600,700' rel='stylesheet'>

    <!-- CSS Reset : BEGIN -->
    <style>

        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
        html,
body {
    margin: 0 auto !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background: #f1f1f1;
}

/* What it does: Stops email clients resizing small text. */
* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

/* What it does: Centers email on Android 4.4 */
div[style*='margin: 16px 0'] {
    margin: 0 !important;
}

/* What it does: Stops Outlook from adding extra spacing to tables. */
table,
td {
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}

/* What it does: Fixes webkit padding issue. */
table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
    margin: 0 auto !important;
}

/* What it does: Uses a better rendering method when resizing images in IE. */
img {
    -ms-interpolation-mode:bicubic;
}

/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
a {
    text-decoration: none;
}

/* What it does: A work-around for email clients meddling in triggered links. */
*[x-apple-data-detectors],  /* iOS */
.unstyle-auto-detected-links *,
.aBn {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
.a6S {
    display: none !important;
    opacity: 0.01 !important;
}

/* What it does: Prevents Gmail from changing the text color in conversation threads. */
.im {
    color: inherit !important;
}

/* If the above doesn't work, add a .g-img class to any image in question. */
img.g-img + div {
    display: none !important;
}

/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
/* Create one of these media queries for each additional viewport size you'd like to fix */

/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
    u ~ div .email-container {
        min-width: 320px !important;
    }
}
/* iPhone 6, 6S, 7, 8, and X */
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    u ~ div .email-container {
        min-width: 375px !important;
    }
}
/* iPhone 6+, 7+, and 8+ */
@media only screen and (min-device-width: 414px) {
    u ~ div .email-container {
        min-width: 414px !important;
    }
}


    </style>

    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>

        .primary{
	background: #17bebb;
}

.bg_white{
	background: #ffffff;
}
.bg_light{
	background: #f7fafa;
}
.bg_black{
	background: #000000;
}
.bg_dark{
	background: rgba(0,0,0,.8);
}
.email-section{
	padding:2.5em;
}

/*BUTTON*/
.btn{
	padding: 10px 15px;
	display: inline-block;
  font-family: 'Poppins','Arial',sans-serif;
  font-weight: 500;
  font-size: 1rem;
}
.btn.btn-primary{
	border-radius: 5px;
	background: #EF6C4E;
	color: #ffffff;
}

.btn.btn-secondary{
    border-radius: 5px;
    font-size:13px;
	background: #2D1EED;
	color: #ffffff;
}
.btn.btn-white{
	border-radius: 5px;
	background: #ffffff;
	color: #000000;
}
.btn.btn-white-outline{
	border-radius: 5px;
	background: transparent;
	border: 1px solid #fff;
	color: #fff;
}
.btn.btn-black-outline{
	border-radius: 0px;
	background: transparent;
	border: 2px solid #000;
	color: #000;
	font-weight: 700;
}
.btn-custom{
	color: rgba(0,0,0,.3);
	text-decoration: underline;
}

h1,h2,h3,h4,h5,h6{
	font-family: 'Poppins', sans-serif;
	color: #14223B;
	margin-top: 0;
	font-weight: 600;
}

body{
	font-family: 'Inter', sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 1.6em;
	color: #14223b;
}

p {
  font-family: 'Inter', sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 1.6em;
	color: #14223b;
}

a{
	color: #17bebb;
}

table{
}
/*LOGO*/

.logo h1{
	margin: 0;
}
.logo h1 a{
	color: #14223B;
	font-size: 24px;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
}

/*HERO*/
.hero{
	position: relative;
	z-index: 0;
}

.hero .text{
	color: rgba(20,34,59,0.7);
    line-height: 1.7;
    margin-bottom:10px;
}
.hero .text h2{
	color: #14223B;
	font-size: 28px;
	margin-bottom: 0;
	font-weight: 600;
	line-height: 1.4;
}
.hero .text h3{
	font-size: 24px;
	font-weight: 300;
}
.hero .text h2 span{
	font-weight: 500;
	color: #14223B;
}

.text-author{
	border: 1px solid rgba(224,223,223);
	max-width: 50%;
	margin: 0 auto;
	padding: 2em;
    margin-top:30px;
}
.text-author img{
	border-radius: 500px;
	margin-bottom: 20px;
}
.text-author h3{
	margin-bottom: 0;
}
ul.social{
	padding: 0;
}
ul.social li{
	display: inline-block;
	margin-right: 10px;
}
.mockup-img {
  width: 50%;
  display: block;
  margin: auto;
  margin-bottom: 50px;
}


/*FOOTER*/

.footer{
	border-top: 1px solid rgba(0,0,0,.05);
	color: rgba(0,0,0,.5);
}
.footer .heading{
	color: #14223B;
	font-size: 18px;
}
.footer ul{
	margin: 0;
	padding: 0;
}
.footer ul li{
	list-style: none;
	margin-bottom: 10px;
}
.footer ul li a{
	color: rgba(0,0,0,1);
}


@media screen and (max-width: 500px) {


}


    </style>


</head>

<body width='100%' style='margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;'>
<center style='width: 100%; background-color: #f1f1f1;'>
<div style='display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;'>‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ </div>
<div style='max-width: 600px; margin: 0 auto;' class='email-container'><!-- BEGIN BODY -->
<table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' style='margin: auto; width: 100%;'>
<tbody>
<tr>
<td valign='top' class='bg_white' style='padding: 1em 2.5em 0 2.5em;'>
<table role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;'>
<tbody>
<tr>
<td class='logo' style='text-align: left;'>
<h1><a href='https://www.companyfuel.nl' style='text-transform: lowercase;'>Company Fuel</a></h1>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<!-- end tr -->
<tr>
<td valign='middle' class='hero bg_white' style='padding: 2em 0 4em 0;'>
<table role='presentation' border='0' cellpadding='0' cellspacing='0' style='width: 100%;'>
<tbody>
<tr>
<td style='padding: 0 2.5em; text-align: left; padding-bottom: 3em;'>
<div class='text'>
<img alt='Website voorbeeld' class='mockup-img' src='https://www.companyfuel.nl/wp-content/uploads/Website-mockup_visual_versie-2.png'>
<h2>Je website demo staat klaar!</h2>
<p>Hallo $name,</p>
<p>Op basis van jouw doelstellingen, branche en gewenste uitstraling hebben we een website demo gemaakt. Deze staat nu voor je klaar. </p>
<p>Wanneer je dit toepast, bereik je het volgende:<br><br> ✔ Flexibele website die je makkelijk zelf aanpast<br> ✔ Krachtige en snelle website voor betere ervaring<br> ✔ Geavanceerde functionaliteiten en klaar voor de toekomst<br> ✔ Bewezen tactieken voor meer leads en klanten</p>
<p><br><a href='https://demo.companyfuel.nl?id=$demoId' target='_blank' class='btn btn-primary'>Bekijk website advies</a></p>
<p><br>Na het bekijken van de demo kan je eenvoudig zelf aan de slag met het toepassen van de tips. Wil je meer weten over de opties die we bieden om je verder te ontzorgen?</p>
<p>Bekijk <a href='https://www.companyfuel.nl/professionele-website/'>professionele website opties</a></p>
</div>
</td>
</tr>
<tr>
<td style='text-align: center;'>
<div class='text-author'>
<h3 class='name'><img alt='Michel Winkels' src='https://www.companyfuel.nl/wp-content/uploads/cf_michel_vierkant.webp' width='200' height='200'><br>Michel Winkels</h3>
<span class='position'>Business director</span>
<p><a href='https://calendly.com/michelwinkels/belafspraak' class='btn btn-secondary'>Belafspraak</a></p>
<!--<p><a href='#' class='btn-custom'>Ignore Request</a></p>--></div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<!-- end tr --> <!-- 1 Column Text + Button : END --></tbody>
</table>
<table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' style='margin: auto; width: 100%;'>
<tbody>
<tr>
<td valign='middle' class='bg_light footer email-section'>
<table>
<tbody>
<tr>
<td valign='top' width='66.666%' style='padding-top: 20px;'>
<table role='presentation' cellspacing='0' cellpadding='0' border='0' style='width: 100%;'>
<tbody>
<tr>
<td style='text-align: left; padding-right: 10px;'>
<h3 class='heading'>Company Fuel</h3>
<p style='color: rgba(20,34,59,0.7);'>Dé brandstof voor groei en succes.</p>
</td>
</tr>
</tbody>
</table>
</td>
<td valign='top' width='33.333%' style='padding-top: 20px;'>
<table role='presentation' cellspacing='0' cellpadding='0' border='0' style='width: 100%;'>
<tbody>
<tr>
<td style='text-align: left; padding-left: 5px; padding-right: 5px;'>
<h3 class='heading'>Links</h3>
<ul><!--<li><span class='text'>Strategie</span></li>
    <li><span class='text'>Identiteit</span></a></li>
    <li><span class='text'>Web</span></a></li>
    <li><span class='text'>Marketing</span></a></li>
    <br>-->
<li><a href='https://www.companyfuel.nl/professionele-website/' style='color: rgba(20,34,59,0.7);'><u>Website pakketten</u></a></li>
<li><a href='https://www.companyfuel.nl/groeistrategie/' style='color: rgba(20,34,59,0.7);'><u>Groeistrategie</u></a></li>
<li><a href='https://www.companyfuel.nl/support/' style='color: rgba(20,34,59,0.7);'><u>Ondersteuning</u></a></li>
</ul>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!-- end: tr --></div>
</center>
</body>
</html>";
// $content = "Je email: $email, je naam: $name, je persoonlijke demo: https://demo.companyfuel.nl?id=$demoId";
$mail_footer = 'Footer';

$mail_content = $content;
mail($email, $subject, $mail_content, $headers);
