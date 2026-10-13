// Seleziono i 3 paragrafi
let paragrafi = document.querySelectorAll("p");

// Seleziono i 3 bottoni 
let btnColore = document.querySelector("#btnColore");
let btnGrassetto = document.querySelector("#btnGrassetto");
let btnToggle = document.querySelector("#btnToggle");

// BOTTONE 1: cambia colore (ogni paragrafo un colore diverso)
btnColore.addEventListener("click", function() {
    paragrafi.forEach(paragrafo => {
        let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    paragrafo.style.color = `rgb(${r}, ${g}, ${b})`
    })
});

// Bottone 2: rende il testo grassetto
btnGrassetto.addEventListener("click", ()=> {
    paragrafi.forEach(paragrafo => {
        paragrafo.style.fontWeight = "bold"
    }) 
});

// Bottone 3: nasconde e mostra i paragrafi
btnToggle.addEventListener("click", ()=> {
    paragrafi.forEach(paragrafo =>{
    if (paragrafo.style.display === "none") {
        // Se sono nascosti = li mostro
        paragrafo.style.display = "block";
        
    } else {
        // Se sono visibili li nascondo
        paragrafo.style.display = "none";
    }
})
})