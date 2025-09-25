//                     Prevent Default
// tujuannya adalah menghentikan aksi default yang dilakukan oleh sebuah element
// contoh kasus untuk close di card menggunakan default a href

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
    });
});