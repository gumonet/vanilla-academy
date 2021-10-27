let d      = document;
let quote  = d.querySelector("#quote");
let random = d.querySelector("#loadQuote");
let quotes = Array();

async function getQuote(){
    try{
       let response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
   
        if ( ! response.ok ){
            throw response.statusText;
            return ;
        }

        let quote_text = await response.json();
        if( quotes.length === 50 ){
            quotes.shift();
            console.log("Remove first item")
        }
        console.log( quotes )
        if ( quotes.includes( quote_text[0]) ) {
            getQuote();
            return 
        }

        quotes.push( quote_text[0] );
        quote.textContent = quote_text[0]; 
        
    } catch( error ){
        console.warn( error );
    }
}

random.addEventListener( 'click', (e) => { getQuote(); })

d.addEventListener('DOMContentLoaded', (event) => { getQuote(); });