function checkboxwe() {
    self += 1
    console.log(self)

}


function addValue() {
    if (self % 2 == !0) {
        const input_login = document.querySelector(".main__reg_login")
        const input_password = document.querySelector(".main__reg_password")
        const input_name = document.querySelector(".main__reg_name")
        const value_name = input_name.value
        const value_login = input_login.value
        const value_password = input_password.value
        if (value_name != false && value_login != false && value_password != false) {
            if (value_login != value_password) {
                localStorage.setItem("name", value_name)
                localStorage.setItem("login", value_login)
                localStorage.setItem("password", value_password)
                localStorage.setItem("vhod", true)
                location.href = "http://127.0.0.1:5500"
            }
            else {
                const main_steam = document.querySelector(".main__reg_steam")
                const eror = document.querySelector(".main__reg_eror")
                const input_border = document.querySelector(".reg_input")
                const input_border1 = document.querySelector(".reg_input1")
                const input_border2 = document.querySelector(".reg_input2")
                const input_border3 = document.querySelector(".reg_input3")

                eror.innerHTML = `
                <p class="eror-1">Login and password must not match.</p>
                <p class="eror-2">Please specify different values.</p>
                `
                eror.classList.add("main__reg_eror-activ")
                main_steam.classList.add("main__reg_steam_activ")
                input_border.style.border = "none"
                input_border1.style.border = "1px solid rgb(136, 42, 42)"
                input_border2.style.border = "1px solid rgb(136, 42, 42)"
                input_border3.style.border = "none"

            }
        }
        else {
            const main_steam = document.querySelector(".main__reg_steam")
            const eror = document.querySelector(".main__reg_eror")
            const input_border = document.querySelector(".reg_input")
            const input_border1 = document.querySelector(".reg_input1")
            const input_border2 = document.querySelector(".reg_input2")
            const input_border3 = document.querySelector(".reg_input3")
            eror.innerHTML = `
            <p class="eror-1">Please enter a name account.</p>
            <p class="eror-2">Please enter a login and password account.</p>
            `
            eror.classList.add("main__reg_eror-activ")
            main_steam.classList.add("main__reg_steam_activ")
            input_border.style.border = "1px solid rgb(136, 42, 42)"
            input_border1.style.border = "1px solid rgb(136, 42, 42)"
            input_border2.style.border = "1px solid rgb(136, 42, 42)"
            input_border3.style.border = "none"
        }

    }
    else {
        const main_steam = document.querySelector(".main__reg_steam")
        const eror = document.querySelector(".main__reg_eror")
        const input_border = document.querySelector(".reg_input")
        const input_border1 = document.querySelector(".reg_input1")
        const input_border2 = document.querySelector(".reg_input2")
        const input_border3 = document.querySelector(".reg_input3")
        eror.innerHTML = `
        <p class="eror-1">Please enter a name account.</p>
        <p class="eror-2">Please enter a login and password account.</p>
        <p class="eror-3">And find more errors highlighted below.</p>
        `
        eror.classList.add("main__reg_eror-activ")
        main_steam.classList.add("main__reg_steam_activ")
        input_border.style.border = "1px solid rgb(136, 42, 42)"
        input_border1.style.border = "1px solid rgb(136, 42, 42)"
        input_border2.style.border = "1px solid rgb(136, 42, 42)"
        input_border3.style.border = "1px solid rgb(136, 42, 42)"

    }

}

let self = 0
