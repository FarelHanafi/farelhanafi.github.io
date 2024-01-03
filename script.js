const folder = 'musik/';
const musics = [
    folder + 'audio1.mp3',
    folder + 'audio2.mp3',
    folder + 'audio3.mp3',
    folder + 'audio4.mp3',
    folder + 'audio5.mp3',
    folder + 'audio6.mp3',
    folder + 'audio7.mp3',
    folder + 'audio8.mp3',
    folder + 'audio9.mp3',
    folder + 'audio10.mp3',
    folder + 'audio11.mp3',
    folder + 'audio12.mp3'
];

function play(){
    const audio = new Audio(musics[Math.floor(Math.random() * musics.length)]);
    audio.play();
    audio.loop = true;
}

function showDiv() {document.getElementById('Content').style.display = "block";}

    var swals = Swal
    async function mulai(){
                var { value: nama } = await swals.fire({
                    title: 'Nama kamu?',
                    input: 'text',
                    confirmButtonText: 'Lanjut',
                    allowOutsideClick: false,
                    showCancelButton: false,
                });                           
                if(nama){
                  window.nama = nama;
                  await swals.fire(`Memulai 🎵musik random untukmu &#10084;&#65039;`);
                  play();
                  await swals.fire(`Hai, ${nama}!\nSelamat datang dan enjoy!`);
                  showDiv();
                } else {
                    await swals.fire('Isi namanya');
                    await swals.fire('Gak boleh kosong');
                    mulai();
                }
            }
            mulai();
