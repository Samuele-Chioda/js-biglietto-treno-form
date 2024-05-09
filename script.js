function calcolaPrezzo() {
    let kmDaPercorrere = parseFloat(document.getElementById("kmInput").value);
    let etaUtente = parseInt(document.getElementById("etaInput").value);

    let prezzoBase = kmDaPercorrere * 0.267113; 
    let sconto = 0; 

    if (etaUtente < 21) {
        sconto = prezzoBase * 0.24552; 
    } else if (etaUtente > 63) {
        sconto = prezzoBase * 0.37893; 
    }

    let prezzoFinale = prezzoBase - sconto;

    console.log("Prezzo totale del biglietto:", prezzoFinale.toFixed(2), "€");
}

