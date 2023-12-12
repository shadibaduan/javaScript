// Función para sumar dos números
function sumar(a, b) {
    return a + b;
  }
  
  // Función para restar dos números
  function restar(a, b) {
    return a - b;
  }
  
  // Función para multiplicar dos números
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Función para dividir dos números
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "No se puede dividir por cero";
    }
  }
  
  // Ciclo para realizar operaciones hasta que el usuario decida salir
  while (true) {
    // Solicitar al usuario la operación deseada
    let operacion = prompt("Ingrese la operación (+, -, *, /) o 'salir' para terminar:");
  
    // Salir del ciclo si el usuario ingresa 'salir'
    if (operacion.toLowerCase() === 'salir') {
      break;
    }
  
    // Solicitar al usuario dos números
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    // Evaluar la operación seleccionada y mostrar el resultado
    switch (operacion) {
      case '+':
        alert(`Resultado: ${sumar(num1, num2)}`);
        break;
      case '-':
        alert(`Resultado: ${restar(num1, num2)}`);
        break;
      case '*':
        alert(`Resultado: ${multiplicar(num1, num2)}`);
        break;
      case '/':
        alert(`Resultado: ${dividir(num1, num2)}`);
        break;
      default:
        alert("Operación no válida");
    }
  }