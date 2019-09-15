//variable global
  var visor = document.getElementById("display");
  var botones = document.getElementsByClassName("tecla");
  var numero ;
  var operacion ;
  var resultado ;
//efecto de teclas


  for ( let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("mousedown", function () {
  botones[i].style.transform = "scale(.95, .95)";
  });
  botones[i].addEventListener("mouseup", function () {
  botones[i].setAttribute("style", "transform:scale(1, 1)");

  });
  };

  //escribe digitos en pantalla

  function numerios(num){
    this.numero = num;
    if (visor.textContent=="0") {
      visor.innerHTML= numero ;
    }
    else if (numero>=0) {
      if (visor.textContent=="0") {
        visor.innerHTML= "" ;
      }
      visor.innerHTML+= numero ;
    }

  };
// borrar pantalla
function BorrarVisor(){
  this.visor.innerHTML= "0" ;
};

// asiganacion de teclas
  document.getElementById("0").addEventListener("click", function(){
  numerios(0);
  });
  document.getElementById("1").addEventListener("click", function(){
  numerios(1);
  });
  document.getElementById("2").addEventListener("click", function(){
  numerios(2);
  });
  document.getElementById("3").addEventListener("click", function(){
  numerios(3);
  });
  document.getElementById("4").addEventListener("click", function(){
  numerios(4);
  });
  document.getElementById("5").addEventListener("click", function(){
  numerios(5);
  });
  document.getElementById("6").addEventListener("click", function(){
  numerios(6);
  });
  document.getElementById("7").addEventListener("click", function(){
  numerios(7);
  });
  document.getElementById("8").addEventListener("click", function(){
  numerios(8);
  });
  document.getElementById("9").addEventListener("click", function(){
  numerios(9);
  });
  document.getElementById("on").addEventListener("click", function(){
  BorrarVisor();
  });
  document.getElementById("mas").addEventListener("click", function(){
    operacion = "+";
    CapturaOperacion();

   // var numero1 = numero;
   // visor.innerHTML="";
   //var numero2 = numero;
    
  });

//operaciones


 function CapturaOperacion () {
  if (operacion== "+") {
    function suma (numero){
      resultado = parseFloat(resultado) - parseFloat(numero);
     return resultado;
      }
    visor.innerHTML=  resultado;
  }
}