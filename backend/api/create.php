<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
var_dump($postdata); die ('1221');
if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);
  //var_dump($request); die;
  $username = mysqli_real_escape_string($con, $request->username);
  $password = md5(mysqli_real_escape_string($con, $request->password));
  // Create.
  // fase
  $sql = "INSERT INTO users (`username`,`password`) VALUES ('{$username}','{$password}')";
  //echo $sql; die;

  if(mysqli_query($con,$sql)){
    http_response_code(201);
    $user = [
      'username' => $username,
      'password' => $password,
      //'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($user);
  }
  else{
    http_response_code(422);
  }
}