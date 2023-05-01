<?php
$host = "localhost";
$user = "deb56708n34_demgen";
$password = "magicrule1991";
$database = "deb56708n34_demgen";

// Create a new MySQLi instance
$mysqli = new mysqli($host, $user, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Prepare the SQL statement
$stmt = $mysqli->prepare("INSERT INTO form_data (url_parameters, doelen, uitstraling, kleuren, step3_custom_secondary, step3_option, logo_option, logo_url, first_name, last_name, company_name, email, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

// Bind the parameters to the SQL statement
$stmt->bind_param("sssssssssssss", $_POST['url_parameters'], $_POST['doelen'], $_POST['branche'], $_POST['kleuren'], $_POST['step3_custom_secondary'], $_POST['step3_option'], $_POST['logo_option'], $_POST['logo_url'], $_POST['first_name'], $_POST['last_name'], $_POST['company_name'], $_POST['email'], $_POST['phone_number']);

// Execute the SQL statement
if ($stmt->execute()) {
    $id = $mysqli->insert_id;
    echo $id;
} else {
    echo "error";
}

// Close the statement and connection
$stmt->close();
$mysqli->close();
