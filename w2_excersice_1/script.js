
document.querySelector( 'textarea' ).addEventListener('input', function (e) {
    document.querySelector('#character-count').innerHTML = this.value.length;
})