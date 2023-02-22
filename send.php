<?php
//set up data van POST
if (is_array($_POST)) {
    foreach ($_POST as $key => $value) {
        ${$key} = $value;
    }
}

// $_ZAP_ARRAY = http_build_query($_ZAP_ARRAY);
$_ZAP_ARRAY = http_build_query($_POST['data']);

//print_r($_ZAP_ARRAY);
$ZAPIER_HOOK_URL = "https://hooks.zapier.com/hooks/catch/6427719/3yu9sep/";

$ch = curl_init($ZAPIER_HOOK_URL);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $_ZAP_ARRAY);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

//execution
$response = curl_exec($ch);

// header('Location: ' . "https://datastudio.google.com/reporting/1403456a-6f9d-485e-ab23-83372548099d/page/p_bqeunos10c");
