<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if(!isset($_POST)) die();

session_start();

$response = [];

include 'config.php';

$resText = '';

if($email !== ''){
 // Check email if exists
 $sel = mysqli_query($con,"SELECT count(*) as allcount FROM users WHERE email = '".$email."' ");
 $row = mysqli_fetch_array($sel);

 $resText = "Available";

 if($row['allcount'] > 0){
   $resText = 'Not available';
 }else{

   $query = "INSERT INTO users(email, password) VALUES ('$email', '$encryptPass')";

	 $result = mysqli_query($con, $query);

	 if($result) {
		  $response['status'] = 'done';
	 } else {
		  $response['status'] = 'error';
	 }
	   echo json_encode($response);
  }
}
