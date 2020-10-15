
const perfilusuario= document.getElementById("perfil");

let perfil= JSON.parse(localStorage.getItem('usuarioLista'));

perfilusuario.innerText= perfil.nombre;