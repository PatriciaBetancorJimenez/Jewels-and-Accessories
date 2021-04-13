

<style type="text/css">
	
body{


background: url(img/diamond.jpg) no-repeat center;

background-size: cover;
		
/*vertical-align: middle;*/
 display: flex;
 align-items:center;

}

div{

text-align: center;
}


h1{

font-size: 3em;
}





</style>






<?php

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];


$to = "patriciabetancorjimenez@gmail.com";
$subject = "New e-mail";
$body = "You have received the next e-mail from your website. \n\n $name \n\n $email \n\n $text";

mail($to, $subject, $body);

echo "<body>

<div><h1>Message sent! click <a href='index.html'> here </a> to go back</h1></div>


</body>";

?>