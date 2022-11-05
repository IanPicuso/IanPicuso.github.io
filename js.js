
function HacerJugada(eleccion) {


   
   
  let eleccionCompu = getRandomInt(0, 2);
  switch (eleccion) {
       case 0:
           switch (eleccionCompu) {
               case 0:
                    alert("Empate");
                break;
                case 1:
                    alert("Ganaste");
                break;
                case 2:
                    alert("Perdiste");
                break;	 
                default:
                break;	
           }
           break;
           case 1:
            switch (eleccionCompu) {
                case 0:
                    alert("Empate");
                    break;
                    case 1:
                        alert("Ganaste");
                    break;
                    case 2:
                        alert("Perdiste");
                    break;	
                    default:
                    break;	
            }
            break;
            case 2:
                switch (eleccionCompu) {
                    case 0:
                        alert("Empate");
                        break;
                        case 1:
                            alert("Ganaste");
                        break;
                        case 2:
                            alert("Perdiste");
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