
window.addEventListener("load", function(){
  var coderObject = JSON.parse(localStorage.getItem("logueo"));
  console.log(coderObject);
  var spanCoderName = document.getElementById("coderName");

  spanCoderName.innerText = coderObject.nombre;


})
