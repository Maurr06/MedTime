function segundos(H) {
    // HH:MM:SS
    let horas = parseInt(H.slice(0, 2));
    let minutos = parseInt(H.slice(3, 5));
    let segundos = parseInt(H.slice(6));

    return segundos + minutos * 60 + horas * 60 * 60;
}

function hms(S) {
    let horaCadena = '';

    // Se calculan las horas
    if (Math.floor(S / 3600) < 10) {
        horaCadena += '0';
    }
    horaCadena += Math.floor(S / 3600) + ":";

    S -= Math.floor(S / 3600) * 3600; // Se restan las horas para calcular minutos

    // Se calculan los minutos
    if (Math.floor(S / 60) < 10) {
        horaCadena += '0';
    }
    horaCadena += Math.floor(S / 60) + ":";

    S -= Math.floor(S / 60) * 60; // Se restan los minutos para calcular segundos

    // Se calculan los segundos
    if (S < 10) {
        horaCadena += '0';
    }
    horaCadena += S;

    return horaCadena;
}

module.exports = { segundos, hms };
