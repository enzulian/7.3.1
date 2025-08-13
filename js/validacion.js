function showAlertSuccess() {
    const  alert = document.getElementById("alert-success");
    alert.classList.add("show");
}

function showAlertError(mensaje) {
  const alert = document.getElementById("alert-danger");
  alert.querySelector("p").textContent = mensaje;
  alert.classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const password1 = document.getElementById("password1").value.trim();
  const password2 = document.getElementById("password2").value.trim();
  const terminos = document.getElementById("terminos").checked;

if (!nombre || !apellido || !email || !password1 || !password2 || !terminos) {
    showAlertError("⚠️ Todos los campos son obligatorios y debe aceptar los términos.");
    return;
}

if (password1.length < 6) {
    showAlertError("⚠️ La contraseña debe tener al menos 6 caracteres.");
    return;
}

showAlertSuccess();
});