<?php
require 'database.php';
$postdata = file_get_contents("php://input");
//var_dump($postdata); die;
if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);
  $username = mysqli_real_escape_string($con, $request->username);
  $password = md5(mysqli_real_escape_string($con, $request->password));
  // Create.
  // fase
  $sql = "SELECT * FROM users WHERE `username`='{$username}' and `password` ='{$password}'";
  $result = mysqli_query($con,$sql);
  $rows = mysqli_fetch_row($result);
  if($rows){
    //http_response_code(201);
   return http_response_code(204);
  }
  else{
    return http_response_code(422);
  }
}