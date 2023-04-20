<?php

// Connect to the database
$host = "localhost";
$user = "deb56708n34_demgen";
$password = "magicrule1991";
$database = "deb56708n34_demgen";

$con = mysqli_connect($host, $user, $password, $database);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Select all rows from the form_data table
$sql = "SELECT * FROM form_data";

$result = mysqli_query($con, $sql);

// Create an array to hold the data
$data = array();

// Loop through the rows and add them to the array
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Close the connection
mysqli_close($con);

// Convert the array to JSON
$json = json_encode($data);

// Set the content type to JSON
header('Content-Type: application/json');

// Print the JSON data
echo $json;
