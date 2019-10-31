<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (empty($request)) {
    return http_response_code(400);
  }

  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $username = mysqli_real_escape_string($con, trim($request->username));
  $password = md5(mysqli_real_escape_string($con, $request->password));

  // Update.
  $sql = "UPDATE `users` SET `username`='$username',`password`='$password' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql)){
    http_response_code(204);
  }
  else{
    return http_response_code(422);
  }  
}