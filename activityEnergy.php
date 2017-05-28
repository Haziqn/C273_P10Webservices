<?php

$duration = $_GET['duration'];
$weight = $_GET['weight'];
$activity = $_GET['activity'];

if($activity == 'aerobics') {
    $result = 6.5 * $weight * $duration / 60;
}
else if ($activity == 'cycling') {
$result = 5.5 * $weight * $duration / 60;
} else if ($activity == 'jogging') {
$result = 7.0 * $weight * $duration / 60;
}


$response['result'] = $result;

echo json_encode($response);
