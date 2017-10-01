<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if(!isset($_POST)) die();

session_start();

$response = [];

include 'config.php';

$query = "SELECT * FROM `users` WHERE email='$email' AND password='$encryptPass'";

$result = mysqli_query($con, $query);

if(mysqli_num_rows($result) > 0) {
	$response['status'] = 'loggedin';
	$response['user'] = $email;
	$response['id'] = md5(uniqid());
	$_SESSION['id'] = $response['id'];
	$_SESSION['user'] = $email;
} else {
	$response['status'] = 'error';
}

echo json_encode($response);
