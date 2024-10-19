// app.js
const express = require('express');
const app = express();
const port = 3000;

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon site !');
});

// Écoute du port
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
