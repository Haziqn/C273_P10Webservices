<?php

$age = $_GET['age'];
$gender = $_GET['gender'];
$weight = $_GET['weight'];
$height = $_GET['height'];

if($gender=='M') {
    $result = 10 * $weight + 6.25 * $height - 5 *$age + 5;
}
else {
    $result = 10 * $weight + 6.25 * $height - 5 *$age - 161;    
}

$response['result'] = $result;

echo json_encode($response);

