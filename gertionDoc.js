const { error, log } = require("console");
const fs = require("fs");
/*if(fs.existsSync("./mesfichiers")){
    fs.rmdir('/mesfichiers',erreur=>{
        if(erreur){
            console.log(erreur);
        }else{
            console.log("dossier supprimé avec succes")
        }
    })
}else{
    fs.mkdir('./mesfichiers',(error)=>{
        if (erreur){
            console.log(erreur);  
        }else {
        console.log('dossier crée avec succée');
    }
});

}*/

/*fs.writeFile('./mesfichiers/fichier1.txt',' bongostado je developpe en node.js',()=>{
    console.log("fichier cree avec succes")
})*/
/*fs.readFile('./mesfichiers/fichier1.txt',(erreur,donnee)=>{
    if(erreur){
        console.log(erreur);
    }else{
     console.log(donnee.toString());
    }
    })*/
if(fs.existsSync('./mesfichiers/fichier1.txt')){
    fs.unlink('./mesfichiers/fichier1.txt',(erreur)=>{
        if(erreur){
            console.log(erreur);
            
        }else{
            console.log('fichier supprimée');
        }
    })
}else{
    console.log("impossible de delete car le fichier n'existe pas")
}

