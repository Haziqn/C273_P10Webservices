<?php

$num1 = $_GET['num1'];
$num2 = $_GET['num2'];

$result = $num1 * $num2;

$response['result'] = $result;

echo json_encode($response);

