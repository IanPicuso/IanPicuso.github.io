
function HacerJugada(eleccion) {


   
   
    let eleccionCompu = getRandomInt(0, 2);
    switch (eleccion) {
         case 0:
             switch (eleccionCompu) {
                 case 0:
                      alert("Empate. ¡La computadora y vos eligieron piedra!");
                  break;
                  case 1:
                      alert("Ganaste, porque la computadora eligió tijera!");
                  break;
                  case 2:
                      alert("Perdiste, porque la computadora eligió papel :(");
                  break;	 
                  default:
                  break;	
             }
             break;
             case 1:
              switch (eleccionCompu) {
                  case 0:
                      alert("Empate. ¡La computadora y vos eligieron papel!");
                      break;
                      case 1:
                          alert("Ganaste, porque la computadora eligió piedra!");
                      break;
                      case 2:
                          alert("Perdiste, porque la computadora eligió tijera :(");
                      break;	
                      default:
                      break;	
              }
              break;
              case 2:
                  switch (eleccionCompu) {
                      case 0:
                          alert("Empate. ¡La computadora y vos eligieron tijera!");
                          break;
                          case 1:
                              alert("Ganaste, porque la computadora eligió papel!");
                          break;
                          case 2:
                              alert("Perdiste, porque la computadora eligió piedra :(");
                          break;	 
                          default:
                          break;	
                  }
              break;
  
              default:
                  break;
       }
      }
  
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
      }