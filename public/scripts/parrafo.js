const text1 = `Soy un desarrollador apasionado por crear experiencias visuales atractivas y fáciles de usar. También disfruto mejorando la forma en que se gestionan los datos para que todo funcione de manera más fluida y eficiente.`;

const parrafo = document.getElementById("parrafo1");

function typeText(text, id, delay = 10) {
    let i = 0;

    function write() {
        if (i < text.length) {
            id.textContent += text[i];
            i++;
            setTimeout(write, delay);
        }
    }

    write();
}

function type() {
    typeText(text1, parrafo, 10);
}

window.addEventListener("load", type);