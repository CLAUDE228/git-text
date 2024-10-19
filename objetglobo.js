//console.log(global);

setTimeout(() => {
    console.log("salut le monde")
    clearInterval(temps);
}, 2000 );
var temps = setInterval(() => {
    console.log("bezossssout")
}, 500);