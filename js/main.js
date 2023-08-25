
let arrayNumeriUtente = creaArrayNumeri();
console.log("I numeri scelti sono: "+arrayNumeriUtente);
let sommaNumeriUtente = stampaSommaNumeri(arrayNumeriUtente);
let mediaAritmeticaNumeriUtente = stampaMediaAritmetica(arrayNumeriUtente);





//FUNZIONI
function creaArrayNumeri()
{  
    
    let utenteSceltaLunghezzaArray = parseInt(prompt("Quanti numeri vuoi inserire? "));
    let arrayNumeri = []; 
 
    for(let i = 0; i < utenteSceltaLunghezzaArray; i++)
    {
        
        let utenteSceltaNumero = parseInt(prompt("Inserisci un numero: "));
        arrayNumeri.push(utenteSceltaNumero);

    }

    return arrayNumeri; 
   
}

function sommaNumeri(arrayNumeri)
{
  
    let somma = 0;

    for(let i = 0; i < arrayNumeri.length; i++ )
    {
       
        somma += arrayNumeri[i];


    }
  
    return somma; 

}


function mediaAritmetica(arrayNumeri)
{

   let somma = sommaNumeri(arrayNumeri); 
   let media = somma/arrayNumeri.length;

   return media; 

}

function stampaSommaNumeri(arrayNumeri)
{
    console.log("La somma è: "+sommaNumeri(arrayNumeri)); 

}

function stampaMediaAritmetica(arrayNumeri)
{

    console.log("La media aritmetica è: "+mediaAritmetica(arrayNumeri).toFixed(2));

}


