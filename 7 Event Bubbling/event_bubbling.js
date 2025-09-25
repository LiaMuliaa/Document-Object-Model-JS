//                  Event Bubbling
// adalah bubling yg membungkus event" yg ada 
// contoh kasus kita sudah mempunyai event close yg ketika di klik card nya hilang
// di tambah event baru untuk card ketika di klik memunculkan allert
// ketika ingin close yg terjadi adalah alert yg muncul padahal yg diinginkan card nya kehapus saja
// maka di tambahlah event bubbling supaya tidak menumpuk dan menjalankan event yg lain

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
        //      Prevent Default
        e.preventDefault();
        //      Event Bubbling
        e.stopPropagation();
    });
});

// tambah event alert pada card
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function(e) {
        alert('ok');
    });
});