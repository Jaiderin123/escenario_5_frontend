const users = [
  {
    avatar: "dashboard/images/avatar/1.jpg",
    nombre: "Jaider Betancur",
    email: "johndoe@example.com",
    rol: "Gerente General",
    salario: 1000000,
    estado: "Activo",
  },
  {
    avatar: "dashboard/images/avatar/2.jpg",
    nombre: "Maria Torres",
    email: "martos@example.com",
    rol: "Administradora",
    salario: 6000000,
    estado: "Activo",
  },
  {
    avatar: "dashboard/images/avatar/3.jpg",
    nombre: "Fernando Duque",
    email: "ferdu@example.com",
    rol: "Marketing",
    salario: 2500000,
    estado: "Activo",
  },
  {
    avatar: "dashboard/images/avatar/4.jpg",
    nombre: "Carlos Agudelo",
    email: "caagu@example.com",
    rol: "Backend",
    salario: 38000000,
    estado: "En Reunión",
  },
  {
    avatar: "dashboard/images/avatar/5.jpg",
    nombre: "Ana Trujillo",
    email: "anallo@example.com",
    rol: "Frontend",
    salario: 3000000,
    estado: "Vacaciones",
  },
];

//Funcion para retornar los datos de la lista hacia la tabla HTML 
function renderUsers() {
  const tbody = document.querySelector("#usersTable tbody");
  tbody.innerHTML = ""; // Limpiar contenido previo

  users.forEach((user) => {
    const row = `<tr>
      <td>
        <img class="rounded-circle" src="${user.avatar}" alt="">
        ${user.nombre}
      </td>
      <td>${user.email}</td>
      <td>${user.rol}</td>
      <td>${user.salario}</td>
      <td>${user.estado}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

window.onload = () => {
  renderUsers();
};
