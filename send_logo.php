<?php
   $name = ($_POST['name']);
   file_put_contents($name, base64_decode($_POST['data'] ));
   //echo( $name );
?>
