console.log("NexaPass cargado correctamente 🚀");


const cards=document.querySelectorAll(".card");


cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.background="#d9a44122";

});


card.addEventListener("mouseleave",()=>{

card.style.background="#ffffff10";

});

});
