let cantidad;

do {
    cantidad = +prompt("Ingresa la cantidad de veces que quieres jugar Cachipún");
  } while (!cantidad | cantidad<=0) //Se debe escribir un número, este debe ser mayor a 0

for (i = 0; i < cantidad; i++) {
    var jugada;

    do {
        jugada = prompt("Ingresa tu jugada: ¿Piedra, Papel o Tijera?").toLowerCase();
      } while (!jugada) //Se debe escribir un número, este debe ser mayor a 0    

    var maquina = Math.floor(Math.random()*3);
        if (maquina==0) {
            maquina = "piedra";
        } else if (maquina==1) {
            maquina = "papel"
        } else {
            maquina = "tijera"
        }

    function jugar (jugada,maquina) {
        if ((jugada=="piedra" && maquina=="piedra") || (jugada=="papel" && maquina=="papel") || (jugada=="tijera" && maquina=="tijera")) {
            resultado = "Empataste, la máquina también sacó: "+maquina;
        }   else if ((jugada=="piedra" && maquina=="papel") || (jugada=="papel" && maquina=="tijera") || (jugada=="tijera" && maquina=="piedra")) {
            resultado = "Perdiste, la máquina sacó "+maquina;
        }   else if ((jugada=="piedra" && maquina=="tijera") || (jugada=="papel" && maquina=="piedra") || (jugada=="tijera" && maquina=="papel")) {
            resultado = "Felicitaciones, le ganaste a la máquina que sacó: "+maquina;
        } else {
            resultado = "No ingresaste el valor correcto, perdiste una jugada"
        }
        return resultado;
    }
    alert(jugar(jugada,maquina));
}