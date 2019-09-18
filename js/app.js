// variables globales
var nunero1;
var numero2;
var operacion;



// creacion del variables teclado y pantalla
var display = document.getElementById('display');
  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var punto = document.getElementById('punto');
  var signo = document.getElementById('sign');
  // captura de valores del teclado en pantalla

//  uno.onclick = function(e){
 /*document.getElementByClass('tecla').onclick = function(e){
   var id =  e.element.id
    if (display.textContent=="0") {
      display.innerHTML= "" ;
      display.textContent = display.textContent  + "1"
      length
    }
    else if (display.textContent>=0)  {
      display.textContent = display.textContent  + "1";
    }
}
*/

uno.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "1";

  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "1";
  }

}

dos.onclick = function(e){
  if (display.textContent=="0" ) {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "2";

  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "2";
  }

}
tres.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "3" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "3";
  }
}

cuatro.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "4" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "4";
  }
}
cinco.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "5" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "5";
  }
}
seis.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "6" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "6";
  }
}
siete.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "7" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "7";
  }
}
ocho.onclick = function(e){
  if (display.textContent=="0" ) {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "8" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "8";
  }
}
nueve.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "9" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "9";
  }
}
cero.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "0" ;
  }
  else if (display.textContent>=0)  {
    display.textContent = display.textContent  + "0";
  }
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    Numero1 = display.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    Numero1 = display.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    Numero1 = display.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    Numero1 = display.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
  if (display.textContent == "") {
    Numero2 = Numero1;
    operaciones();
  } else {
    Numero2 = display.textContent;
    operaciones();
  }
    
}
punto.onclick = function(e){
  if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "."
  }
  else if (display.textContent>=0)  {
    display.textContent = display.textContent  + ".";
  }
}
signo.onclick = function(e){
  if (display.textContent=="0" || display.textContent=="") {

    display.innerHTML= "" ;
    display.textContent = display.textContent  + "-"
  }

}
//  metodos para resetear y limpiar pantalla
function limpiar(){
  display.textContent = "";
}
function resetear(){
  display.textContent = "0";
  Numero1 = 0;
  Numero2 = 0;
  operacion = "";
}

/// se realiza un selector de operacion
function operaciones(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(Numero1) + parseFloat(Numero2);
      break;
    case "-":
        res = parseFloat(Numero1) - parseFloat(Numero2);
        break;
    case "*":
      res = parseFloat(Numero1) * parseFloat(Numero2);
      break;
    case "/":
      res = parseFloat(Numero1) / parseFloat(Numero2);
      break;
  }
  //resetear();
  display.textContent = res;
}

// Efecto de teclas

  uno.addEventListener("mousedown", function () {
  uno.style.transform = "scale(.95, .95)";
  });
  uno.addEventListener("mouseup", function () {
  uno.setAttribute("style", "transform:scale(1, 1)");

  });

  dos.addEventListener("mousedown", function () {
  dos.style.transform = "scale(.95, .95)";
  });
  dos.addEventListener("mouseup", function () {
  dos.setAttribute("style", "transform:scale(1, 1)");

  });

  tres.addEventListener("mousedown", function () {
  tres.style.transform = "scale(.95, .95)";
  });
  tres.addEventListener("mouseup", function () {
  tres.setAttribute("style", "transform:scale(1, 1)");

  });
  cuatro.addEventListener("mousedown", function () {
  cuatro.style.transform = "scale(.95, .95)";
  });
  cuatro.addEventListener("mouseup", function () {
  cuatro.setAttribute("style", "transform:scale(1, 1)");

  });
  cinco.addEventListener("mousedown", function () {
  cinco.style.transform = "scale(.95, .95)";
  });
  cinco.addEventListener("mouseup", function () {
  cinco.setAttribute("style", "transform:scale(1, 1)");

  });
  seis.addEventListener("mousedown", function () {
  seis.style.transform = "scale(.95, .95)";
  });
  seis.addEventListener("mouseup", function () {
  seis.setAttribute("style", "transform:scale(1, 1)");

  });
  siete.addEventListener("mousedown", function () {
  siete.style.transform = "scale(.95, .95)";
  });
  siete.addEventListener("mouseup", function () {
  siete.setAttribute("style", "transform:scale(1, 1)");

  });
  ocho.addEventListener("mousedown", function () {
  ocho.style.transform = "scale(.95, .95)";
  });
  ocho.addEventListener("mouseup", function () {
  ocho.setAttribute("style", "transform:scale(1, 1)");

  });
  nueve.addEventListener("mousedown", function () {
  nueve.style.transform = "scale(.95, .95)";
  });
  nueve.addEventListener("mouseup", function () {
  nueve.setAttribute("style", "transform:scale(1, 1)");

  });




/*function trasformar() {
  for ( let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("mousedown", function () {
    botones[i].style.transform = "scale(.95, .95)";
    });
    botones[i].addEventListener("mouseup", function () {
    botones[i].setAttribute("style", "transform:scale(1, 1)");

    });
    };
  }*/
