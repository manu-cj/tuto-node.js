const fs = require('fs')

//Gestion dossiers

if (fs.existsSync('./routes')) {
    
}

fs.mkdir('./routes', (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Dossier créé avec succés');
    }
})


//création de fichier

fs.writeFile('./routes/fichier1.txt', 'J\'apprend node.js', ()=> {
    console.log('Création du fichier avec succès');
})


//Lecture d'un fichier

fs.readFile('./routes/fichier1.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data.toString());
    }
})


//Suppression d'un fichier

if (fs.existsSync('./routes/fichier2.txt')) {
    fs.unlink('./routes/fichier1.txt', (error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('fichier supprimé avec succés');
        }
    })
}
else {
    console.log('Impossible de supprimer un fichier qui n\'èxiste pas');
}