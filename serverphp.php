<?php
// Démarrer le serveur local
$host = '127.0.0.1';
$port = 8000;
$docRoot = __DIR__;

// Afficher un message de confirmation
echo "Serveur démarré sur http://$host:$port\n";
echo "Document root est $docRoot\n";

// Démarrer le serveur
exec("php -S $host:$port -t $docRoot");
?>
