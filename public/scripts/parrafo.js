const text1 = `Antes de que continúe y conozca mis proyectos y habilidades, quiero informarle que soy un apasionado desarrollador web, graduado en Desarrollo de Aplicaciones Web (DAW). Con una mente abierta, estoy preparado para comenzar mi carrera de forma profesional. Mi motivación para aprender y mejorar es infinita, y mi ambición no tiene límites. Estoy listo para afrontar nuevos retos y aportar ideas innovadoras.`;
const text2 = `Después de esta breve presentación, está list@ para conocer qué hice en estos dos últimos años`;

const id1 = document.getElementById("parrafo1");
const id2 = document.getElementById("parrafo2");

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
    typeText(text1, id1, 10);
    setTimeout(() => typeText(text2, id2, 10), text1.length * 10 + 800);
}

window.addEventListener("load", type);