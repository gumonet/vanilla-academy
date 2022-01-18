let d = document;
d.querySelector( 'textarea' ).addEventListener('input', function (e) {
    let text  = this.value.replace(/(\r\n|\n|\r)/gm, ' ');
    let words = text.split(' ').filter( item => { 
      console.log( item );
      return '' !== item; 
    });
  
    d.querySelector('#character-count').innerHTML = text.length;
    d.querySelector('#words-count').innerHTML = words.length ;
  
})