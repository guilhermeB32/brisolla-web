const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",()=>{

card.style.boxShadow="0 15px 35px rgba(0,0,0,.15)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});