let d = document;

d.addEventListener('click', function( event ) {
   
    if ( event.target.matches( '[type="checkbox"]' ) ) {
        let inputs     = event.target.form.querySelectorAll( '[data-password]' );
        for ( input of inputs ) {
            if( event.target.checked ) {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        }
    }
})