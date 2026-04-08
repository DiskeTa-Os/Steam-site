function Vivaarium() {
    const input_login = document.querySelector(".main__login_sign_label-name")
    const input_password = document.querySelector(".main__login_sign_label-password")
    const value_login = input_login.value
    const value_password = input_password.value
    const login = localStorage.getItem("login")
    const password = localStorage.getItem("password")
    if (value_login == login && value_password == password) {
        localStorage.setItem("vhod", true)
        location.href = "http://127.0.0.1:5500"
    }
    else{
        const aliha = document.querySelector(".aliha")
        aliha.classList.add("aliha-activ")
    }
}