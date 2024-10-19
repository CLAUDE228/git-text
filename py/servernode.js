const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour traiter les données POST
app.use(express.urlencoded({ extended: true }));

// Définir le moteur de template EJS
app.set('view engine', 'ejs');

// Servir les fichiers statiques (CSS, images, etc.)
app.use(express.static('public'));

// Page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Page de chat
app.post('/chat', (req, res) => {
    const { username, gender } = req.body;
    
    // Rendu de la page chat avec les informations dynamiques
    res.render('chat', { username, gender });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Le site de discussion est disponible sur http://localhost:${port}`);
});
