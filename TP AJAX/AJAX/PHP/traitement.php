<?php

include_once('functions.php');

if (isset($_POST['nom']))
    $nom = $_POST['nom'];
if (isset($_POST['prenom']))
    $prenom = $_POST['prenom'];
if (isset($_POST['email']))
    $email = $_POST['email'];
if (isset($_POST['DOfbirth']))
    $DOfbirth = $_POST['DOfbirth'];
if (isset($_POST['filiere']))
    $filiere = $_POST['filiere'];
if (isset($_POST['action']))
    $action = $_POST['action'];
if (isset($_POST['id']))
    $id = $_POST['id'];
/*
if (isset($_GET['nom']))
    $nom = $_GET['nom'];
if (isset($_GET['prenom']))
    $prenom = $_GET['prenom'];
if (isset($_GET['email']))
    $email = $_GET['email'];
if (isset($_GET['DOfbirth']))
    $DOfbirth = $_GET['DOfbirth'];
if (isset($_GET['filiere']))
    $filiere = $_GET['filiere'];
if (isset($_GET['action']))
    $action = $_GET['action'];
*/
if ($action == 1) {
    $res = insertEtudiant($nom, $prenom, $email, $DOfbirth, $filiere);
    if ($res)
        echo "1";
     else
        echo "0";
}
else if ($action == 2) {
    $res = updateEtudiant($id, $nom, $prenom, $email, $DOfbirth, $filiere);
    if ($res)
        echo "1";
    else
        echo "0";
} else if ($action == 3) {
    $res = deleteEtudiant($id);
    if ($res)
        echo "1";
    else
        echo "0";
} else if ($action == 4) {
    $res = getEtudiant($id);
    echo $res;
} else if ($action == 5) {
    $res = getAllEtudiants();
    echo $res;
}
?>
