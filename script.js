function mostrarInfo(){

alert("Perú tiene una gran diversidad cultural, histórica y natural 🇵🇪");

}


const fotos=[

"https://upload.wikimedia.org/wikipedia/commons/9/94/Machu_Picchu%2C_Peru.jpg",

"https://upload.wikimedia.org/wikipedia/commons/6/6f/Plaza_de_Armas_Lima_Peru.jpg",

"https://upload.wikimedia.org/wikipedia/commons/0/0d/Lake_Titicaca_Peru.jpg"

];


let i=0;


setInterval(()=>{

i++;

if(i>=fotos.length){
i=0;
}

document.getElementById("imagen").src=fotos[i];

},3000);
