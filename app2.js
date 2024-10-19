const express = require("express");

const app = express();

app.get("/",(req, res)=> {
    res.status(200).sendfile ("mesfichiers/jc.html",{root :__dirname});
});
app.get("/",(req, res)=> {
    res.status(200).sendfile ("mesfichiers/interface.html",{root :__dirname});
});

app.get("/", (req, res)=>{
    res.status(300).redirect("/interface");
});



app.use((req, res)=>{
    res.status(404).sendfile ("mesfichiers/jeu.html",{root :__dirname});
});

app.listen(3001, ()=>{
    console.log("En attente des requêtes au Port 3001");
})
console.log("Erreur lors de la création du serveur")

