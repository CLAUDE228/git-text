<?php
// Définition du port d'écoute
$port = 8000;

// Fonction pour générer le contenu de la page
function generateContent($route) {
    $title = "Serveur Local PHP";
    $content = "";

    switch ($route) {
        case '/':
            $content = "<h2>Bienvenue sur la page d'accueil</h2>";
            $content .= "<p>Ceci est un exemple de contenu dynamique.</p>";
            $content .= "<a href='/about'>À propos</a>";
            break;
        case '/about':
            $content = "<h2>À propos</h2>";
            $content .= "<p>Ceci est la page À propos de notre site.</p>";
            $content .= "<a href='/'>Retour à l'accueil</a>";
            break;
        default:
            header("HTTP/1.0 404 Not Found");
            $title = "404 - Page non trouvée";
            $content = "<h2>404 - Page non trouvée</h2>";
            $content .= "<p>Désolé, la page que vous recherchez n'existe pas.</p>";
            $content .= "<a href='/'>Retour à l'accueil</a>";
    }

    return "
    <!DOCTYPE html>
    <html lang='fr'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>$title</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
            h1 { color: #333; }
        </style>
    </head>
    <body>
        <h1>$title</h1>
        $content
    </body>
    </html>
    ";
}

// Création du serveur
$server = new \React\Http\Server(function (\Psr\Http\Message\ServerRequestInterface $request) {
    $route = $request->getUri()->getPath();
    return new \React\Http\Message\Response(
        200,
        ['Content-Type' => 'text/html'],
        generateContent($route)
    );
});

printf("Le serveur est en écoute sur le port %d...\n", $port);

$socket = new \React\Socket\SocketServer("0.0.0.0:$port");
$server->listen($socket);