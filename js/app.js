




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

/// posible solucion

/*if(numeroText.length>8){
  display.innerHTML = numeroText.slice(0, 8);
  }else{
  display.innerHTML = numeroText;
  } }
  Pablo Cuello 12:49
  Esto lo aplicas para cuando agregas un número a la pantalla y cuando obtienes el resultado de una operación
  con slice(0,8) limitas que solo se tomen los 8 primeros caracteres
*/


  var maxima = display.textContent.length;
  var texto = document.getElementById('demo');
  texto.innerHTML= maxima ;
  


  uno.onclick = function(e){
    if (maxima<9) {
      maxima = maxima + 1 ;
      if (display.textContent=="0") {
        display.innerHTML= "" ;
        display.textContent = display.textContent  + "1";
    
      }
      else if (display.textContent>=0 || "-")  {
        display.textContent = display.textContent  + "1";
      }
      
    } else {
      display.textContent = display.textContent;
      
    }

    
  
  }
  dos.onclick = function(e){
    if (maxima<9) {
      maxima = maxima + 1 ;
      if (display.textContent=="0" ) {
        display.innerHTML= "" ;
        display.textContent = display.textContent  + "2";
    
      }
      else if (display.textContent>=0 || "-")  {
        display.textContent = display.textContent  + "2";
      }
      
    } else {
      display.textContent = display.textContent;
      
    }
  
  
  }
  



tres.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
    if (display.textContent=="0") {
      display.innerHTML= "" ;
      display.textContent = display.textContent  + "3" ;
    }
    else if (display.textContent>=0 || "-")  {
      display.textContent = display.textContent  + "3";
    }
    
  } else {
    display.textContent = display.textContent;
    
  }



  
}

cuatro.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
    if (display.textContent=="0") {
      display.innerHTML= "" ;
      display.textContent = display.textContent  + "4" ;
    }
    else if (display.textContent>=0 || "-")  {
      display.textContent = display.textContent  + "4";
    }
  
    
  } else {
    display.textContent = display.textContent;
    
  }


}
  
cinco.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
      if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "5" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "5";
  }
    
  } else {
    display.textContent = display.textContent;
    
  }


}


seis.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
     if (display.textContent=="0") {
    display.innerHTML= "" ;
    display.textContent = display.textContent  + "6" ;
  }
  else if (display.textContent>=0 || "-")  {
    display.textContent = display.textContent  + "6";
  }
    
    
  } else {
    display.textContent = display.textContent;
    
  }
 
}
siete.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
    if (display.textContent=="0") {
      display.innerHTML= "" ;
      display.textContent = display.textContent  + "7" ;
    }
    else if (display.textContent>=0 || "-")  {
      display.textContent = display.textContent  + "7";
    }
    
    
  } else {
    display.textContent = display.textContent;
    
  }
  
}
ocho.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
    if (display.textContent=="0" ) {
      display.innerHTML= "" ;
      display.textContent = display.textContent  + "8" ;
    }
    else if (display.textContent>=0 || "-")  {
      display.textContent = display.textContent  + "8";
    }
    
  } else {
    display.textContent = display.textContent;
    
  }

}
nueve.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
    if (display.textContent=="0") {
      display.innerHTML= "" ;
      display.textContent = display.textContent  + "9" ;
    }
    else if (display.textContent>=0 || "-")  {
      display.textContent = display.textContent  + "9";
    }
    
    
  } else {
    display.textContent = display.textContent;
    
  }
 
}
cero.onclick = function(e){
  if (maxima<9) {
    maxima = maxima + 1 ;
    if (display.textContent=="0") {
      display.innerHTML= "" ;
      display.textContent = display.textContent  + "0" ;
    }
    else if (display.textContent>=0)  {
      display.textContent = display.textContent  + "0";
    }
    
  } else {
    display.textContent = display.textContent;
    
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
    display.innerHTML= "0" ;
    display.textContent = display.textContent  + "."
  }
  else if (display.textContent>=0)  {
    display.textContent = display.textContent  + ".";
  }
}
//cambio de signo
signo.onclick = function(e){
  if (display.textContent=="0" || display.textContent=="") {

    display.innerHTML= "" ;
    display.textContent = display.textContent  + "-"
  }
   
    else if (display.textContent !="0") {
			var aux;
			if (display.textContent.charAt(0)=="-") {
				aux = display.textContent.slice(1);
			}	else {
				aux = "-" + display.textContent;
			}
      display.textContent = "";
      display.textContent = aux;
		
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
  maxima=0;
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
cero.addEventListener("mousedown", function () {
  cero.style.transform = "scale(.95, .95)";
  });
  cero.addEventListener("mouseup", function () {
  cero.setAttribute("style", "transform:scale(1, 1)");

  });
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

  punto.addEventListener("mousedown", function () {
  punto.style.transform = "scale(.95, .95)";
  });
  punto.addEventListener("mouseup", function () {
  punto.setAttribute("style", "transform:scale(1, 1)");

  });
  igual.addEventListener("mousedown", function () {
  igual.style.transform = "scale(.95, .95)";
  });
  igual.addEventListener("mouseup", function () {
  igual.setAttribute("style", "transform:scale(1, 1)");

  });
  mas.addEventListener("mousedown", function () {
    mas.style.transform = "scale(.95, .95)";
    });
    mas.addEventListener("mouseup", function () {
    mas.setAttribute("style", "transform:scale(1, 1)");
  
    });
    menos.addEventListener("mousedown", function () {
      menos.style.transform = "scale(.95, .95)";
      });
      menos.addEventListener("mouseup", function () {
      menos.setAttribute("style", "transform:scale(1, 1)");
    
      });
      por.addEventListener("mousedown", function () {
        por.style.transform = "scale(.95, .95)";
        });
        por.addEventListener("mouseup", function () {
        por.setAttribute("style", "transform:scale(1, 1)");
      
        });

        division.addEventListener("mousedown", function () {
          division.style.transform = "scale(.95, .95)";
          });
          division.addEventListener("mouseup", function () {
          division.setAttribute("style", "transform:scale(1, 1)");
        
          });
          reset.addEventListener("mousedown", function () {
            reset.style.transform = "scale(.95, .95)";
            });
            reset.addEventListener("mouseup", function () {
            reset.setAttribute("style", "transform:scale(1, 1)");
          
            });
            signo.addEventListener("mousedown", function () {
              signo.style.transform = "scale(.95, .95)";
              });
              signo.addEventListener("mouseup", function () {
              signo.setAttribute("style", "transform:scale(1, 1)");
            
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
