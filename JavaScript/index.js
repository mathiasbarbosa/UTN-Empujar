

/** Funciones **/

// declarar la funcion

function sumar(numero1, numero2){
    // let num1 =  prompt('Decime el num1 para sumar')
    // let num2 = prompt('Decime el num2  a sumar')

    // num1 = Number(num1)
    // let numeroTipoNumber = Number(num1)


    // console.log(num1 == 'NaN');
    // console.log(num2);
    // console.log(numero1);
                    // 10                5 
    if (Number(numero1) && Number(numero2)) {
        let resultado = Number(numero1) + Number(numero2)

        alert(`El resultado de ${numero1} + ${numero2} es: ${resultado}`)
    }else{
        alert('Uno de los numeros ingresados no es correcto')
    }
        // true / false -  // true / false
        // true            y  true =  true
        // true            y  false  =  false
        // false           y  false  =  false
        // false           y  true  =  false
    // if( (num1 = NaN ) || (num2 == NaN)  ) {
    //     alert('Uno de los numeros ingresados no es correcto')
    // }else{
    //     let resultado = num1 + num2

    //     alert(`El resultado de ${num1} + ${num2} es: ${resultado}`)
    // }
}

// sumar(10, 5)
// sumar(12, 8)


// let num1 =  prompt('Decime el num1 para sumar')
// let num2 = prompt('Decime el num2  a sumar')

// sumar(num1, num2)
// // sumar(10, 5)
// // sumar(10, 5)
// // sumar(10, 5)


function operacionMatematica(num1, num2, op){
    let resultado;

    switch (op) {
        case "+":
            resultado = num1 +  num2   
            alert(resultado)
            break;
        case "-":
            resultado = num1 -  num2   
            alert(resultado)
            break;
    
        default:
            break;
    }

}

// operacionMatematica(3, 6, "-")
// operacionMatematica(3, 10, "+")


// let suma = function(a, b) {
//     return a + b;
//   };

// console.log(typeof suma);


// const pi = 3.14 //number

// pi = 10 //String

const frutas = ["🍎","🍏","🍇" ] //array

console.log( frutas);
console.log(typeof frutas);


frutas.push("🍒")
frutas.push(10)
console.log( frutas);

console.log(typeof frutas);


function suma(num1, num2) {
    let resultado = num1 + num2

    return   {
        num1,
        num2,
        resultado
    }

}

// console.log( suma(10, 5).resultado);

// let resultadoSuma = suma(3, 4)

// console.log(resultadoSuma[0]);


let userName = 'Juan';


function showMessage() {
  let userName = "Bob"; 

  let message = 'Hola, ' + userName;
  alert(message);
}

alert( userName );

showMessage();

alert( userName ); 



// function showMessage(text = "sin texto",  from ) {
//     alert( from + ": " + text );
//   }


 /**
  * Esta funcion imprime por pamtallla el parametro from y text
  * @param {string} from  nombre de la persona
  * @param {string} text texto a imprimir en pantalla 
  */
function showMessage( from = 'Mathias', text = "sin texto" ) {
    alert( from + ": " + text );
  }
































  
  showMessage(); // Ann: sin texto

  showMessage('mathias', 'mensaje de prueba')

  console.log();




//  Función min(a, b)
// importancia: 1
// Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

// Por ejemplo: