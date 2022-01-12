const request = new XMLHttpRequest();
let randomNumber = Math.round(Math.random() * 83);
request.open("GET", `https://swapi.py4e.com/api/people/${randomNumber}`, true);
request.send();
request.onload = () =>{
    const json = JSON.parse(request.responseText);
    document.getElementById("name").textContent = json.name;
    document.getElementById("height").textContent = `${json.height} CM`;
    document.getElementById("mass").textContent = `${json.mass} KG`;
}