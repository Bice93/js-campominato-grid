// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
//  ed emetto un messaggio in console con il numero della cella cliccata.


//const containerGrid = document.getElementById(`container_square`); //recupero il parent dei quadratini
const buttonPlay = document.getElementById(`btn_play`); //recupero il bottone play
const boxPlayed = document.getElementById(`box_play`);

buttonPlay.addEventListener(`click`, function(){ //al click del bottone play visualizzo la griglia di gioco
    const containerGrid = document.createElement(`div`); //creo la griglia dove vado ad inserire tutti i quadrati
    containerGrid.classList.add(`container_square`); //aggiungo alla griglia la classe 
    boxPlayed.innerHTML ="";
    for (let i=1; i < 101; i++){  
        const square = createSquare();
        square.innerText = i;  // aggiungo l'indice corrispondente al quadratino
        containerGrid.append(square); // aggiungo al parent il quadratino per 100 volte con il ciclo
    
        square.addEventListener(`click`,function(){ // al click del quadratino coloro la casella di verde
            square.classList.add(`active`);
            console.log(`Hai cliccato la casella: ${i}`)
        })
    }
    boxPlayed.append(containerGrid); //aggiungo al parent TUTTA la griglia
});





// ........................FUNZIONI.......................
function createSquare (){ //creo il quadratino e gli assegno le classi che voglio
    const newSquare = document.createElement(`div`);
    newSquare.classList.add(`square`);
    return newSquare;  //restituisco newSquare così lo posso assegnare a square
}

// ....................DIFFICOLTà MEDIA....................
// for (let i=1; i < 82; i++){  
//     const squareNormal = createSquare();
//     squareNormal.innerText = i;  // aggiungo l'indice corrispondente al quadratino
//     containerGrid.append(squareNormal); // aggiungo al parent il quadratino per 100 volte con il ciclo

//     square.addEventListener(`click`,function(){ // al click del quadratino coloro la casella di verde
//         squareNormal.classList.add(`active`);
//         console.log(`Hai cliccato la casella: ${i}`)
//     })
// }


// //.......................DIFFICOLTà DIFFICILE......................
// for (let i=1; i < 50; i++){  
//     const squareExpert = createSquare();
//     squareExpert.innerText = i;  // aggiungo l'indice corrispondente al quadratino
//     containerGrid.append(squareExpert); // aggiungo al parent il quadratino per 100 volte con il ciclo

//     square.addEventListener(`click`,function(){ // al click del quadratino coloro la casella di verde
//         squareExpert.classList.add(`active`);
//         console.log(`Hai cliccato la casella: ${i}`)
//     })
// }