function NewCoder (nombre,usuario,contrasena){
  this.nombre = nombre;
  this.usuario = usuario;
  this.contrasena = contrasena;
}



function required(user, spanErrorMessage, usuario){
  if(user.nombre.trim().length == 0 || user.usuario.trim().length == 0 || user.contrasena.trim().length == 0){
    spanErrorMessage.innerHTML = "*Todos los campos son obligatorios*";
  }else {
    spanErrorMessage.innerHTML = "";
    localStorage.setItem("logueo", JSON.stringify(user));
    window.location.assign("login.html");
  }
}


window.addEventListener("load", function(){
  var inpName = document.getElementById("name");
  var inpusuario = document.getElementById("usuario");
  var inpPass = document.getElementById("pass");

  var spanMessage = document.getElementById("spanMessage");
  
  document.getElementById("signUpForm").addEventListener("submit", function(){
    event.preventDefault();
  });


  document.getElementById("signUpUser").addEventListener("click", function(){
    var usuario = new NewCoder(inpName.value, inpusuario.value, inpPass.value);
    required(usuario, spanMessage);
  })
});

