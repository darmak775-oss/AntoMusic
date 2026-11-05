document.getElementById("contactForm").addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const texto = `Hola, soy ${nombre} (tel: ${telefono}). ${mensaje}`;
    const url = "https://wa.me/59163401571?text=" + encodeURIComponent(texto);

    alert("Su consulta ha sido enviada. Nos comunicaremos lo más antes posible.");

    window.open(url, "_blank");
    this.reset();
});