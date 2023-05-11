<?php
/*
$nom = isset($_GET['nom']) ? $_GET['nom'] : NULL;
$prenom = isset($_GET['prenom']) ? $_GET['prenom'] : null;
$email = isset($_GET['email']) ? $_GET['email'] : null;
$DOfbirth = isset($_GET['DOfbirth']) ? $_GET['DOfbirth'] : null;
$filiere = isset($_GET['filiere']) ? $_GET['filiere'] : null;
$action = isset($_GET['action']) ? $_GET['action'] : null;
$id = isset($_GET['id']) ? $_GET['id'] : null;
*/
include_once('functions.php');

$nom = isset($_POST['nom']) ? $_POST['nom'] : NULL;
$prenom = isset($_POST['prenom']) ? $_POST['prenom'] : NULL;
$email = isset($_POST['email']) ? $_POST['email'] : NULL;
$DOfbirth = isset($_POST['DOfbirth']) ? $_POST['DOfbirth'] : NULL;
$filiere = isset($_POST['filiere']) ? $_POST['filiere'] : NULL;
$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$id = isset($_POST['id']) ? $_POST['id'] : NULL;
if ($action == "ajouter") {
    $res = insertEtudiant($nom, $prenom, $email, $DOfbirth, $filiere);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "modifier") {
    $res = updateEtudiant($id, $nom, $prenom, $email, $DOfbirth, $filiere);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "supprimer") {
    $res = deleteEtudiant($id);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "afficher") {
    $res = getEtudiant($id);
    echo $res;
} else if ($action == "afficherTous") {
    $res = getAllEtudiants();
    echo $res;
} else {
    echo "action non reconnue";
}
