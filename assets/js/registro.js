const nombre= document.getElementById("name");
const usuario= document.getElementById("usuario");
const contraseña= document.getElementById("pass");
let Usuarios= [];
const Nusuario= document.getElementById("Nusuario");

Nusuario.addEventListener('submit',(event) =>{

	event.preventDefault();
	let nuevoUsuario={
		nombre: nombre.value,
		user: usuario.value,
		pass: contraseña.value
	};
	let usuarioExistente= null;

	if (localStorage.getItem('usuarioLista')==null) {
		Usuarios.push(nuevoUsuario);
		window.location= "login.html";
	}
	else{ 

		 
		for (let i = 0; i<JSON.parse(localStorage.getItem('usuarioLista')).length; i++) {
			if (JSON.parse(localStorage.getItem('usuarioLista'))[i].user==usuario.value) {
				usuarioExistente = JSON.parse(localStorage.getItem('usuarioLista'))[i];
			}
		}

		if (usuarioExistente==null) {
			Usuarios.push(nuevoUsuario);
			window.location= "login.html";
		}
		else{
      spanMessage.innerHTML = "Este Usuario ya esta registrado";
		}
		
	}


	let guardar= JSON.stringify(Usuarios);
	localStorage.setItem('usuarioLista', guardar);



});