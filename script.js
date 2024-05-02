// Definir la función para calcular el factorial usando la aproximación de Stirling
function factorialStirling(n) {
    return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
}

// Calcular 20! usando la aproximación de Stirling
var aproxValor = factorialStirling(20);

// Mostrar resultados
var resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "<p>Aproximación de Stirling para 20!: " + aproxValor + "</p>";
