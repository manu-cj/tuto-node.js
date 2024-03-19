const http = require('http');

const fs = require('fs')

const serveur = http.createServer((req, res) => {

//Définition de l'en-tête

res.setHeader("content-type", "text/html")
//Définition de la réponse du client
let file = "";
if (req.url === "/acceuil") {
    file = "./views/acceuill.html";
}
else if(req.url === "/profil"){
    file = "./views/profil.html";
}
else {
    file = "./views/404.html";
}
//Lecture du fichier
fs.readFile(file, (error, data) => {
    if (error) {
        console.log(error);
        res.end()
    }
    else {
        res.write(data);
        res.end()
    }
})

}) 

serveur.listen(8000, "localhost", () => {
    console.log("en attente de requètes sur le port 8000");
});