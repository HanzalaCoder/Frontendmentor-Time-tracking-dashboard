const current = document.querySelectorAll(".current")
const old = document.querySelectorAll(".old")
const allbuttons = document.querySelector(".navi")
const daily = document.querySelector(".Daily")
const weekly = document.querySelector(".Weekly")
const  monthly= document.querySelector(".Monthly")

window.addEventListener("DOMContentLoaded",() => {
    applyJsonData("weekly")
    weekly.classList.add("active")

})

daily.addEventListener("click",() => {
    daily.classList.add("active")
    applyJsonData("daily")
    weekly.classList.remove("active")
    monthly.classList.remove("active")

})
weekly.addEventListener("click",() => {
    weekly.classList.add("active")
    applyJsonData("weekly")
    daily.classList.remove("active")
    monthly.classList.remove("active")

})
monthly.addEventListener("click",() => {
    monthly.classList.add("active")
    applyJsonData("monthly")
    weekly.classList.remove("active")
    daily.classList.remove("active")

})





function applyJsonData(value) {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            for(let i = 0; i < json.length; i++) {
                if (value === "daily") {
                    current[i].textContent = json[i].timeframes.daily.current + "hrs"
                    old[i].textContent = "Last Week -" + " "+ json[i].timeframes.daily.previous + " hrs"
                }else if (value === "weekly") {
                    current[i].textContent = json[i].timeframes.weekly.current + "hrs"
                    old[i].textContent = "Last Week -" + " "+ json[i].timeframes.weekly.previous + " hrs"
                } else if (value === "monthly") {
                    current[i].textContent = json[i].timeframes.monthly.current + "hrs"
                    old[i].textContent = "Last Week -" + " "+ json[i].timeframes.monthly.previous + " hrs"
                } else {
                    current[i].textContent = "Error"
                    old[i].textContent = "Eror"
                }
            }
        });
}




