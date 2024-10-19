const http = require("http");
const fs = require('fs');
const serveur = http.createServer((requete, reponse) => {
    // Définir le type de contenu de la réponse
    reponse.writeHead(200, { 'Content-Type': 'text/html' });
    let fichier=" ";
    if (requete.url === "/accueil") {
        fichier="./interface.html";
    } else if (requete.url === "/profil") {
        fichier="./jc.html";
    } else {
        fichier="./galerie.html";

    }
    fs.readFile(fichier,(erreur,donnee)=>{
      if(erreur){
        console.log(erreur);
        reponse.end();
      } else{
        reponse.end(donnee);
      }
    })
});

serveur.listen(3000, "localhost", () => {
    console.log("Prêt à écouter les requêtes au port 3000");
});
