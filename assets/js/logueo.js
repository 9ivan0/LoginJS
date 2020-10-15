const usuario= document.getElementById("usuario");
const password= document.getElementById("password");
const FormularioIn= document.getElementById("FormularioIn");

let user= JSON.parse(localStorage.getItem('usuarioLista'));

FormularioIn.addEventListener('submit',(event) => {

	event.preventDefault();
	let comprobar= null;

	for (let i = 0; i<user.length; i++) {
		if (user[i].user==usuario.value && user[i].pass==password.value) {
			comprobar = user[i];
		}
	}

	if (comprobar!=null) {

		window.location="perfil.html";
	}
	else{
		spanMessage.innerHTML = "El Usuario o la Contraseña estan incorrectos";
	}
	let ingreso= JSON.stringify(comprobar);
	localStorage.setItem('usuarioLista',ingreso);

});
	
