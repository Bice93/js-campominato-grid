// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
//  ed emetto un messaggio in console con il numero della cella cliccata.


const containerGrid = document.getElementById(`container_square`); //recupero il parent dei quadratini

for (let i=0; i < 100; i++){  
    const square = createSquare();
    containerGrid.append(square); // aggiungo al parent il quadratino per 100 volte con il ciclo
}





// ........................FUNZIONI.......................
function createSquare (){ //creo il quadratino e gli assegno le classi che voglio
    const newSquare = document.createElement(`div`);
    newSquare.classList.add(`square`);
    return newSquare;  //restituisco newSquare così lo posso assegnare a square
}