let a = localStorage.getItem('name')
let vhod = localStorage.getItem('vhod')
const hwdhe = () => {
    localStorage.removeItem('vhod')
    location.href = "http://127.0.0.1:5500"
}
if (vhod != null) {
    if (a.length >= 8) {
        a = a.slice(1, 6) + "..."
        const header__acc_group = document.querySelector(".header__acc-group")
        header__acc_group.style.marginLeft = "450px"

    }
    if(a.length <= 8){
        const header__acc_group = document.querySelector(".header__acc-group")
        header__acc_group.style.marginLeft = "470px"
    }
    const header__acc = document.querySelector(".header__acc")
    const header__link_name = document.querySelector(".header__link-name")
    const header__link_community = document.querySelector(".header__link-community")
    header__acc.innerHTML = `
                    <img src="/img/header/avatar/ava_1.png" alt="" class="header__acc-image">
                    <p class="header__acc-name">${a}</p>
                    <p class="header__acc-balance">$5.46</p>
                    <button type="button" class="zero" onclick="tters()"><img src="/img/header/acc group/vector-down.svg" alt="" class="header__acc-down" ></button>
                    <div class="zero-two"><button type="button" class="zero" onclick="hwdhe()">Log out</button></div>
    
    `
    header__link_name.innerHTML = `${a}`
    header__acc.style.backgroundColor = "#1E2329"
    header__link_community.style.marginRight = "0"

}
const header__acc = document.querySelector(".header__acc")
const header__acc_people = document.querySelector(".header__acc-people")
const header__acc_notifications_numbers = document.querySelector(".header__acc-notifications-numbers")
const header__acc_notifications = document.querySelector(".header__acc-notifications")
const zero_two = document.querySelector(".zero-two")
const tters = () => {
    header__acc.classList.toggle("header__acc-activ")
    header__acc_people.classList.toggle("header__acc-people-activ")
    header__acc_notifications_numbers.classList.toggle("header__acc-notifications-numbers-activ")
    header__acc_notifications.classList.toggle("header__acc-notifications-activ")
    zero_two.classList.toggle("zero-two-activ")

}
