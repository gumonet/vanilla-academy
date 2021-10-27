let d      = document;
let quote  = d.querySelector("#quote");
let random = d.querySelector("#loadQuote");
let quotes = Array();

function getQuote(){
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then( ( response ) => {
      if( response.ok ) {
        return response.json();
      } 
      return response.text().then( ( error ) => { throw error } );
    })
    .then (( response ) =>  {
       //quote.textContent = ( typeof response[0] !== 'unfdefined' ) ?  response[0] :  "Doesn't exist quote to show" ;
       let quote_text = response[0];
       if( quotes.length === 50 ){
         quotes.shift();
         console.log("Remove first item")
       }
       console.log( quotes )
       if ( quotes.includes( quote_text) ) {
         getQuote();
         return 
       }

       quotes.push( quote_text );
       quote.textContent = response[0];
    })
    .catch ( ( error ) => { 
        console.warn( error );
    })
}

random.addEventListener( 'click', (e) => { getQuote(); })

d.addEventListener('DOMContentLoaded', (event) => { getQuote(); });