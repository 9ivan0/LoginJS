function validateUser(user, usuario, password){
  console.log(user);
  console.log(user.usuario);
  if(user.usuario == usuario && user.contrasena == password){
    window.location.assign("perfil.html");
  }else{
    window.alert("Usuario o contraseña estan incorrectas");
  }
}


window.addEventListener("load", function(){
  var userusuario = document.getElementById("inpusuario");
  var userPass = document.getElementById("inpPass");
  var form = document.getElementById("signInForm");
  var btnSignIn = document.getElementById("btnLogIn");

  form.addEventListener("submit", function(){
    event.preventDefault();
  });

  btnSignIn.addEventListener("click", function(){
    var UserObject = JSON.parse(localStorage.getItem("logueo"));
    validateUser(UserObject, userusuario.value, userPass.value, form, btnSignIn);
  });
});
