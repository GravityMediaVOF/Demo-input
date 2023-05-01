<?php
// Get the id parameter from the GET request
$id = $_GET['id'];

// Connect to the database
$host = "localhost";
$user = "deb56708n34_demgen";
$password = "magicrule1991";
$database = "deb56708n34_demgen";

$conn = new mysqli($host, $user, $password, $database);

// Query the database for the row with the specified id
$result = $conn->query("SELECT `url_parameters` FROM `form_data` WHERE `id` = $id");

// Convert the result to a comma-separated string and return it
$data = $result->fetch_assoc();
echo implode(',', $data);
