//      DOM Traversal (penelusuran DOM)


//                  Event Handling -> Hanya satu Card
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });


//              DOM Traversal
const close = document.querySelectorAll('.close');

for( let i = 0; i < close.length; i++ ) {
    close[i].addEventListener('click', function(event) {
        // close[i].parentElement.style.display = 'none';
        event.target.parentElement.style.display = 'none';
    });
}

// Atau cara lain
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
});