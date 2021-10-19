let d      = document;
let quote  = d.querySelector("#quote");
let random = d.querySelector("#loadQuote");

function getQuote(){
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then( ( response ) => {
      if( response.ok ) {
        return response.json();
      } 
      return response.text().then( ( error ) => { throw error } );
    })
    .then (( response ) =>  {
       quote.textContent = ( typeof response[0] !== 'unfdefined' ) ?  response[0] :  "Doesn't exist quote to show" ;
    })
    .catch ( ( error ) => { 
        console.warn( error );
    })
}

random.addEventListener( 'click', (e) => { getQuote(); })

d.addEventListener('DOMContentLoaded', (event) => { getQuote(); });