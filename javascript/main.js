function actualizarHora() {
    const fecha = new Date(); // Obtiene la fecha y hora actual
    const opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }; // Formato de 12 horas
    const horaFormateada = fecha.toLocaleTimeString('es-ES', opciones); // Formatea la hora
    document.getElementById('hora').textContent = 'La hora es: ' + horaFormateada; // Actualiza el contenido del párrafo
}

// Llama a la función al cargar la página
actualizarHora();
// Actualiza la hora cada segundo
setInterval(actualizarHora, 1000);