//              element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em> Mulia Sahpira</em>';


//              element.style.<property>
const judul = document.querySelector('#judul');
judul.style.color = 'green';
judul.style.backgroundColor = 'salmon';



// ini bisa di console
//              element.setAttribute()
const p2 = document.querySelector('.p2');
p2.setAttribute('class', 'label');
//              element.getAttribute()
//              element.removeAttribute()


// ini bisa di console
//              element.classList.add() -> menambah kelas baru
//              element.classList.remove() -> menghilangkan kelas yang ada
//              element.classList.toggle() -> kalau element tdk mempunyai kelas tertentu, maka dia akan menambahkan. Kalau dia sudah ada, maka toggle akan menghilangkan
//              element.classList.item() -> untuk mengetahui kelas tertentu yg ada dalam sebuah element
//              element.classList.contains() -> mengecek dalam sebuah element punya kelas tertentu ngga?
//              element.classList.replace() -> mengganti kelas yg ada dengan kelas yg baru 