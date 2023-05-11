<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/css/bootstrap.min.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .error {
            border: 1px solid red;
        }

        .success {
            border: 1px solid green;
        }
    </style>
</head>

<body>
    <div class="container" style="padding: 20px;">
        <form id="formulaire">
            <h1 id="succes" style="background-color: lightgreen; color:darkgreen; font-size: medium; padding :10px;" hidden>Insertion faite avec succes</h1>
            <h1 id="failed" style="background-color: #FFCCCB; color:darkred; font-size: medium; padding :10px;" hidden>Insertion non faite</h1>
            <div class="row">
                <input type="hidden" id="id">
                <div class="form-group col">
                    <label for="name">Nom</label>
                    <input type="text" class="form-control" name="nom" id="nom" placeholder="Votre nom" required>
                    <small id="snom" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>

                <div class="form-group col">
                    <label for="lastname">Prenom</label>
                    <input type="text" class="form-control" name="prenom" id="prenom" placeholder="Votre prenom" required>
                    <small id="sprenom" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>

                <div class="form-group col">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required>
                    <small id="semail" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>
            </div>

            <div class="row">
                <div class="form-group col">
                    <label for="DOfbirth">Date de naissance</label>
                    <input type="date" class="form-control" name="DOfbirth" id="DOfbirth" placeholder="date de naissance" required>
                    <small id="sbirth" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>

                <div class="form-group col">
                    <label for="filiere">Filiere</label>
                    <select class="form-control" id="filiere" name="filiere">
                        <option value="GI">Genie Informatique</option>
                        <option value="GE">Genie Electrique</option>
                        <option value="GME">Genie Mecanique</option>
                    </select>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <button id="ajouter" type="submit" class="btn btn-primary col-2">Ajouter</button>
            </div>
        </form>
        <h3 id="res" class="my-3 text-center" style="color:green" hidden></h3>

        <h2 class="my-3 text-center">Liste des etudiants inscrit</h2>

        <table id="personnes" class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date de Naissance</th>
                    <th scope="col">Filiere</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="listStudent">
                <!--
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>James</td>
                    <td>mark.james@gmail.com</td>
                    <td>2000</td>
                    <td>GI</td>
                    <td>
                        <button class="btn btn-primary mx-1">Modifier</button>
                        <button class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
                -->
            </tbody>
        </table>
        <script src="script.js" type="module"></script>
    </div>
</body>

</html>