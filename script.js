let button = document.getElementById("generate");
let p = document.getElementById("displayed-quote");
let API = "https://api.quotable.io/random";

button.addEventListener('click', () => {
    fetch(API).then(res => res.json()).then(data => {
        p.innerText = data.content;
    }).catch(() => alert("Error Fetching Quote"));
});