const invoices = [
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de Aplicación Móvil", nombre_cliente: "Alice Cooper", correo_cliente: "alice@example.com", total_compra: 1500 },
  { nombre_usuario: "Ana García", servicio_vendido: "Mantenimiento de Software", nombre_cliente: "Roberto Johnson", correo_cliente: "roberto@example.com", total_compra: 300 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Desarrollo de Sitio Web", nombre_cliente: "Charlie Brown", correo_cliente: "charlie@example.com", total_compra: 2500 },
  { nombre_usuario: "María López", servicio_vendido: "Consultoría de Sistemas", nombre_cliente: "Diana Prince", correo_cliente: "diana@example.com", total_compra: 1200 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Integración de API", nombre_cliente: "Eva Adams", correo_cliente: "eva@example.com", total_compra: 800 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de Software a Medida", nombre_cliente: "Gabriel García", correo_cliente: "gabriel@example.com", total_compra: 4000 },
  { nombre_usuario: "Ana García", servicio_vendido: "Auditoría de Seguridad", nombre_cliente: "Sofía Méndez", correo_cliente: "sofia@example.com", total_compra: 600 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Desarrollo de Chatbot", nombre_cliente: "Martín Castro", correo_cliente: "martin@example.com", total_compra: 1800 },
  { nombre_usuario: "María López", servicio_vendido: "Optimización de Base de Datos", nombre_cliente: "Julia Paredes", correo_cliente: "julia@example.com", total_compra: 900 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Implementación de CRM", nombre_cliente: "Andrés Ruiz", correo_cliente: "andres@example.com", total_compra: 2000 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de E-commerce", nombre_cliente: "Lara Díaz", correo_cliente: "lara@example.com", total_compra: 3500 },
  { nombre_usuario: "Ana García", servicio_vendido: "Capacitación en Software", nombre_cliente: "Ricardo Salazar", correo_cliente: "ricardo@example.com", total_compra: 500 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Desarrollo de API", nombre_cliente: "Patricia Alvarado", correo_cliente: "patricia@example.com", total_compra: 1100 },
  { nombre_usuario: "María López", servicio_vendido: "Soporte Técnico", nombre_cliente: "Hugo Morales", correo_cliente: "hugo@example.com", total_compra: 700 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Desarrollo de Software para Móvil", nombre_cliente: "Claudia Reyes", correo_cliente: "claudia@example.com", total_compra: 1700 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Mantenimiento de Servidores", nombre_cliente: "Jorge Fernández", correo_cliente: "jorge@example.com", total_compra: 900 },
  { nombre_usuario: "Ana García", servicio_vendido: "Implementación de Sistemas", nombre_cliente: "Alberto Hernández", correo_cliente: "alberto@example.com", total_compra: 2500 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Desarrollo de Software Educativo", nombre_cliente: "Estela Gómez", correo_cliente: "estela@example.com", total_compra: 1200 },
  { nombre_usuario: "María López", servicio_vendido: "Desarrollo de Plugin", nombre_cliente: "Pablo Moreno", correo_cliente: "pablo@example.com", total_compra: 800 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Consultoría de Cloud", nombre_cliente: "Felipe Vega", correo_cliente: "felipe@example.com", total_compra: 1500 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de Software de Gestión", nombre_cliente: "Silvia Martínez", correo_cliente: "silvia@example.com", total_compra: 3500 },
  { nombre_usuario: "Ana García", servicio_vendido: "Desarrollo de Sistemas de Facturación", nombre_cliente: "Fernando Santos", correo_cliente: "fernando@example.com", total_compra: 2200 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Integración de Software", nombre_cliente: "Alba Romero", correo_cliente: "alba@example.com", total_compra: 1400 },
  { nombre_usuario: "María López", servicio_vendido: "Desarrollo de Aplicación Web", nombre_cliente: "Liliana Cruz", correo_cliente: "liliana@example.com", total_compra: 3000 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Soporte de Aplicaciones", nombre_cliente: "Esteban Castro", correo_cliente: "esteban@example.com", total_compra: 600 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de Juegos", nombre_cliente: "Valeria Castro", correo_cliente: "valeria@example.com", total_compra: 2500 },
  { nombre_usuario: "Ana García", servicio_vendido: "Migración de Datos", nombre_cliente: "Diego Alarcón", correo_cliente: "diego@example.com", total_compra: 900 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Desarrollo de Software para Salud", nombre_cliente: "Sandra Romero", correo_cliente: "sandra@example.com", total_compra: 2100 },
  { nombre_usuario: "María López", servicio_vendido: "Automatización de Procesos", nombre_cliente: "Cecilia Sánchez", correo_cliente: "cecilia@example.com", total_compra: 1750 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Pruebas de Software", nombre_cliente: "Raúl Martínez", correo_cliente: "raul@example.com", total_compra: 950 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de Software para Retail", nombre_cliente: "Juliana López", correo_cliente: "juliana@example.com", total_compra: 1600 },
  { nombre_usuario: "Ana García", servicio_vendido: "Desarrollo de Software para Eventos", nombre_cliente: "Victor Pineda", correo_cliente: "victor@example.com", total_compra: 2300 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Desarrollo de Soluciones a Medida", nombre_cliente: "Patricia Díaz", correo_cliente: "patricia@example.com", total_compra: 3000 },
  { nombre_usuario: "María López", servicio_vendido: "Consultoría en Transformación Digital", nombre_cliente: "Santiago Herrera", correo_cliente: "santiago@example.com", total_compra: 1800 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Implementación de ERP", nombre_cliente: "Natalia Orozco", correo_cliente: "natalia@example.com", total_compra: 4000 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de Software para E-commerce", nombre_cliente: "Manuel Suárez", correo_cliente: "manuel@example.com", total_compra: 3500 },
  { nombre_usuario: "Ana García", servicio_vendido: "Asesoría Técnica", nombre_cliente: "Victoria Ríos", correo_cliente: "victoria@example.com", total_compra: 900 },
  { nombre_usuario: "Carlos Fernández", servicio_vendido: "Desarrollo de Software para ONG", nombre_cliente: "Pablo Silva", correo_cliente: "pablo@example.com", total_compra: 2200 },
  { nombre_usuario: "María López", servicio_vendido: "Desarrollo de Software de Gestión", nombre_cliente: "Isabel González", correo_cliente: "isabel@example.com", total_compra: 2000 },
  { nombre_usuario: "Luis Martínez", servicio_vendido: "Soporte Técnico Remoto", nombre_cliente: "Marcos Delgado", correo_cliente: "marcos@example.com", total_compra: 500 },
  { nombre_usuario: "Juan Pérez", servicio_vendido: "Desarrollo de Software para Educación", nombre_cliente: "Karen López", correo_cliente: "karen@example.com", total_compra: 1600 }
];

//Funcion para retornar los datos de la lista hacia la tabla HTML 
function renderInvoices() {
  const tbody = document.querySelector("#invoiceTable tbody");
  tbody.innerHTML = ""; // Limpiar contenido previo

  invoices.forEach((invoice) => {
    const row = `<tr>
      <td>${invoice.nombre_usuario}</td>
      <td>${invoice.servicio_vendido}</td>
      <td>${invoice.total_compra}</td>
      <td>${invoice.nombre_cliente}</td>
      <td>${invoice.correo_cliente}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}


/*function addInvoice() {
  const userNameInput = document.getElementById("invoice-user-name");
  const serviceInput = document.getElementById("invoice-service");
  const totalInput = document.getElementById("invoice-total");
  const clientNameInput = document.getElementById("invoice-client-name");
  const clientEmailInput = document.getElementById("invoice-client-email");

  const newInvoice = {
    nombre_usuario: userNameInput.value,
    servicio_vendido: serviceInput.value,
    total_compra: parseFloat(totalInput.value),
    nombre_cliente: clientNameInput.value,
    correo_cliente: clientEmailInput.value,
  };

  invoices.push(newInvoice);
  renderInvoices();

  // Clear the input fields
  userNameInput.value = "";
  serviceInput.value = "";
  totalInput.value = "";
  clientNameInput.value = "";
  clientEmailInput.value = "";
}*/


window.onload = () => {
  renderInvoices();
};
