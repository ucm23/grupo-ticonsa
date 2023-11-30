<?php
// api.php

// Realiza alguna lógica en PHP, por ejemplo, obtener datos de una base de datos
$data = array('message' => '¡Hola desde PHP!');

// Convierte los datos a formato JSON para que puedan ser consumidos por JavaScript
echo json_encode($data);
?>