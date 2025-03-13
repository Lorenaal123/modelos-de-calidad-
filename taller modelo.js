// Catálogo de programas de la Universidad San Mateo
const catalogo = [
  { id: 1, nombre: "Ingeniería de Sistemas", duracion: "8 semestres" },
  { id: 2, nombre: "Administración de Empresas", duracion: "8 semestres" },
  { id: 3, nombre: "Derecho", duracion: "10 semestres" }
];

// Mostrar catálogo en consola
catalogo.forEach(programa => {
  console.log(`${programa.id}. ${programa.nombre} - ${programa.duracion}`);
});

// Generar formulario
document.body.innerHTML += `
  <form id="formInscripcion">
    <h2>Solicitud de Inscripción</h2>
    <label>Nombre: <input type="text" id="nombre" /></label><br>
    <label>Programa ID: <input type="number" id="programaId" /></label><br>
    <button type="button" onclick="enviarSolicitud()">Enviar</button>
  </form>
`;

const solicitudes = []; // Aquí se almacenarán temporalmente las solicitudes

function enviarSolicitud() {
  const nombre = document.getElementById("nombre").value.trim();
  const programaId = document.getElementById("programaId").value.trim();

  if (nombre === "" || programaId === "") {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const programa = catalogo.find(p => p.id == programaId);
  if (!programa) {
    alert("El ID del programa no es válido.");
    return;
  }

  // Guardar la solicitud en el array (simulación de base de datos)
  solicitudes.push({ nombre, programaId });

  console.log("Solicitud registrada:", { nombre, programaId });

  alert(`Solicitud enviada correctamente para ${nombre} en el programa ${programa.nombre}.`);
}

window.catalogo = catalogo;
window.enviarSolicitud = enviarSolicitud;
