<?php
header('Access-Control-Allow-Origin: *');  
session_start();
$str=array();
if(isset($_SESSION['security_code'])){
array_push($str,$_SESSION['security_code']);  
}
echo json_encode($str);
?>