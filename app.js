const express = require('express')
const app = express()
const morgan = require("morgan")

//Ressources statiques
app.use(express.static("public"));

//affiches le temps de réponses des requète dans le terminal
app.use(morgan("tiny"));


//affichage des pages
app.get('/acceuil', (req, res) => {
    res.status(200).sendFile("./views/acceuill.html", {root : __dirname});
});

app.get('/profil', (req, res) => {
    res.status(200).sendFile("./views/profil.html", {root : __dirname});
});

app.get("/", (req, res) => {
    res.status(300).redirect("/acceuil");
})

app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root : __dirname});
})



//Ecoute du port
app.listen(8001, () => {
    console.log('En attente de requête sur le port 8001');
})
console.log('Erreur lors de la création du serveur sur le port 8001');