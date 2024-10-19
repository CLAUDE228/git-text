const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "mesfichiers", "iai.html"));
});

app.listen(3001, () => {
    console.log("En attente des requêtes au Port 3001");
});

console.log("Erreur lors de la création du serveur");
