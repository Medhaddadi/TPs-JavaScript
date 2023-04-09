<?php

//Connection a la base de donnée
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=ajaxexmp', 'admin', 'admin');
    return $db;
}

//insertion etudiant 
function insertEtudiant($nom, $prenom, $email, $DOfbirth, $filiere)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO etudiant (nom, prenom, email,dateNaissance,filiere) VALUES ('" . $nom . "', '" . $prenom . "', '" . $email . "','" . $DOfbirth . "','" . $filiere . "')");
    if ($res)
        return 1;
    else
        return 0;
}

//suppression etudiant
function deleteEtudiant($id)
{
    $db = connectionDB();
    $res = $db->exec("DELETE FROM etudiant WHERE id = '" . $id . "'");
    if ($res)
        return 1;
    else
        return 0;
}

//modification etudiant
function updateEtudiant($id, $nom, $prenom, $email, $DOfbirth, $filiere)
{
    $db = connectionDB();
    $res = $db->exec("UPDATE etudiant SET nom = '" . $nom . "', prenom = '" . $prenom . "', email = '" . $email . "', dateNaissance = '" . $DOfbirth . "', filiere = '" . $filiere . "' WHERE id = '" . $id . "'");
    if ($res)
        return 1;
    else
        return 0;
}


//afficher un etudiant
function getEtudiant($id)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM etudiant WHERE id = '" . $id . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}


//afficher tous les etudiants
function getAllEtudiants()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM etudiant order by id");
    //parcourir $res qui contient beaucoups de ligne et le retouner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
