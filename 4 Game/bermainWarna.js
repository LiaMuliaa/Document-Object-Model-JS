//  tangkap button
const tUbahWarna = document.getElementById('tUbahWarna');
//  tangkap elemen yg di tuju, kasih event untuk tombol
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightBlue';
    // document.body.setAttribute('class', 'biru-muda');

    // manipulasi class
    document.body.classList.toggle('biru-muda');
}



// membuat tombol menggunakan JS
const tAcakWarna = document.createElement('button');
// membuat tulisan untuk button
const teksTombol = document.createTextNode('Acak Warna');
// gabungkan tombol + tulisan
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
// simpan ke tempat yg diinginkan
// (tangkap button sebelumnya sesuai letak button baru mau di mana) disini pakai const tUbahWarna diatas
tUbahWarna.after(tAcakWarna);
// kasih event untuk tombol
tAcakWarna.addEventListener('click', function() {
    // membuat random angka dalam rentang 1-255
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});




// tangkap slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
// dengarkan event
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});



document.body.addEventListener('mousemove', function(event) {
    // posisi mouse -> event.clientX/Y
    // ukuran browser -> window.innerWidth
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
});