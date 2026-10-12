// Seleziono i 3 paragrafi
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

// Seleziono i 3 bottoni 
let btnColore = document.getElementById("btnColore");
let btnGrassetto = document.getElementById("btnGrassetto");
let btnToggle = document.getElementById("btnToggle");

// Funzione per generare un colore RGB casuale
function coloreCasuale() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

// BOTTONE 1: cambia colore (ogni paragrafo un colore diverso)
btnColore.addEventListener("click", function() {
    p1.style.color = coloreCasuale();
    p2.style.color = coloreCasuale();
    p3.style.color = coloreCasuale();
});

// Bottone 2: rende il testo grassetto
btnGrassetto.addEventListener("click", function () {
    p1.style.fontWeight = "bold";
    p2.style.fontWeight = "bold";
    p3.style.fontWeight = "bold";

});

// Bottone 3: nasconde e mostra i paragrafi
let visibili = true;
btnToggle.addEventListener("click", function () {
    if (p1.style.display === "none") {
        // Se sono nascosti = li mostro
        p1.style.display = "block";
        p2.style.display = "block";
        p3.style.display = "block";
        
    } else {
        // Se sono visibili li nascondo
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";
    }
});