// Event Handler
// Inline HTML attribute 
const p3 = document.querySelector('.p3');
function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
}

// Event Handler
// Element Method
const p2 = document.querySelector('.p2');
function ubahWarnaP2() {
    p2.style.backgroundColor = 'salmon';
}
p2.onclick = ubahWarnaP2;

// addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    // ambil parent
    const ul = document.querySelector('section#b ul');
    // buat element baru 
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    // dirangkai
    liBaru.appendChild(teksLiBaru);
    // simpan didalam ul baru
    ul.appendChild(liBaru);
});