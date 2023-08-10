function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function completo() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminosCheckbox = document.getElementById("terminos");

    if (
        nombre.trim() === "" ||
        apellido.trim() === "" ||
        mail.trim() === "" ||
        password1.length < 6 ||
        password1 !== password2 ||
        !terminosCheckbox.checked
    ) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let regBtn = document.getElementById("regBtn");
    regBtn.addEventListener("click", completo);
});