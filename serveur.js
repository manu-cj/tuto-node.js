const http = require('http');
const { url } = require('inspector');
const serveur = http.createServer((req, res) => {

//Définitio n de l'en-tête

res.setHeader("content-type", "text/html")
//Définition de la réponse du client
res.write('<head><meta charset="utf8"></head>')
    if (req.url === "/acceuil") {
        res.write('<h1>Acceuil</h1><p>Bienvenue sur node.js</p>')
    }
    else if(req.url === "/profil"){
        res.write('<h1>Profil</h1><p>Vous êtes un developpeur node.js</p>');
    }
    else {
        res.write('<h1>404 page indisponnible</h1><p>Url non valide</p>');
    }
    //Finalisation de la requète
    res.end()
}) 

serveur.listen(8000, "localhost", () => {
    console.log("en attente de requètes sur le port 8000");
});