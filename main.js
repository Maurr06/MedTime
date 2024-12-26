document.getElementById("medForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar datos del formulario
    const fechaBase = new Date(document.getElementById("fecha").value); // Fecha inicial
    const cantidadDosis = parseInt(document.getElementById("dosis").value); // Número de dosis
    const intervaloHoras = parseInt(document.getElementById("intervalo").value); // Intervalo en horas

    // Obtener fecha actual para comparar
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Resetear hora para comparar solo la fecha

    const manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1); // Calcular mañana

    // Generar las fechas y horas de las dosis
    let outputHTML = `<div class="my-3 p-3 bg-dark rounded text-light">`;

    for (let i = 0; i < cantidadDosis; i++) {
        // Calcular la fecha y hora de la dosis actual
        let dosisFecha = new Date(fechaBase);
        dosisFecha.setHours(dosisFecha.getHours() + i * intervaloHoras);

        // Determinar si es Hoy, Mañana o una fecha posterior
        let textoDia = "";
        if (isSameDay(dosisFecha, hoy)) {
            textoDia = "Hoy";
        } else if (isSameDay(dosisFecha, manana)) {
            textoDia = "Mañana";
        } else {
            textoDia = formatFecha(dosisFecha); // Fecha como "día/mes"
        }

        // Formatear la hora para mostrar
        outputHTML += `<p><strong>Dosis ${i + 1}:</strong> ${textoDia}, ${formatHora(dosisFecha)}</p>`;
    }

    outputHTML += `</div><button class="btn btn-success mt-3 w-100" onclick="location.reload()">Reiniciar</button>`;
    
    // Mostrar resultados
    document.getElementById("output").innerHTML = outputHTML;
});

// Función para formatear solo la hora como "hora:minuto"
function formatHora(fecha) {
    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    return `${hora}:${minutos}`;
}

// Función para formatear la fecha como "día/mes"
function formatFecha(fecha) {
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    return `${dia}/${mes}`;
}

// Función para verificar si dos fechas corresponden al mismo día
function isSameDay(fecha1, fecha2) {
    return (
        fecha1.getFullYear() === fecha2.getFullYear() &&
        fecha1.getMonth() === fecha2.getMonth() &&
        fecha1.getDate() === fecha2.getDate()
    );
}
