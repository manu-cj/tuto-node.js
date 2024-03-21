const express = require('express')
const app = express()
const morgan = require("morgan")

//Ressources statiques
app.use(express.static("public"));

app.use(morgan("tiny"));

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

app.listen(8001, () => {
    console.log('En attente de requête sur le port 8001');
})
console.log('Erreur lors de la création du serveur sur le port 8001');