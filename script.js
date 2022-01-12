//Classic fetch() and then() approach
function starWars() {
    let randomNumber = Math.round(Math.random() * 83)
    fetch(`https://swapi.py4e.com/api/people/${randomNumber}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".name").innerText =`name : ${data.name.toLowerCase()}`
        document.querySelector(".mass").innerText =`mass : ${data.mass.toLowerCase()} kg`
        document.querySelector(".height").innerText =`height : ${data.height.toLowerCase()} cm`
    })
}
document.querySelector(".button").addEventListener("click", starWarsAsync)

// Async/Await approach
async function starWarsAsync(){
    let randomNumber = Math.round(Math.random() * 83);
    const response = await fetch(`https://swapi.py4e.com/api/people/${randomNumber}`);
    const data = await response.json();
    document.querySelector(".name").innerText =`name : ${data.name.toLowerCase()}`
    document.querySelector(".mass").innerText =`mass : ${data.mass.toLowerCase()} kg`
    document.querySelector(".height").innerText =`height : ${data.height.toLowerCase()} cm`
    }