const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {

    createnotification();

});

function createnotification() {

    const notif = document.createElement
    ("div");
    notif.classList.add('toast');

    notif.innerText= "This is notification";

    container.appendChild(notif)
    setTimeout(() => {
        notif.remove(); 
    }, 3000);
}