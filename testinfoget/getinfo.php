<?php
$user=$_GET["name"];

$con = mysqli_connect('localhost', 'root', 'myy130805010017');
if (!$con)
 {
 die('Could not connect: ' . mysqli_error());
 }

mysqli_select_db($con,"class");

$sql="SELECT * FROM test_news where teammate = '$user'";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
echo "<p>".$row["news"]."</p>";
mysqli_free_result($result);
mysqli_close($con);
?>