function switchForm() {
    let loginForm = document.querySelector('form');
    let registerForm = document.querySelector('.switch-form');

    loginForm.classList.toggle('active');
    registerForm.classList.toggle('active');
}

function login(){
    /*var username = document.forms[0]["username"].value;
    var password = document.forms[0]["password"].value;

    if (username == "Admin" && password == "Admin") {
        window.location.href = 'HESH-Table.html';
        return false;
    } else {
        alert("Неверный логин/почта или пароль");
        return false;
    }
    */

    window.location.href = 'HESH-Table.html';
}

