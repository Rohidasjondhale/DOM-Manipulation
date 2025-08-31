
const ul = document.querySelector("ul") || document.createElement("ul");
if (!document.querySelector("ul"))
{
    document.body.appendChild(ul);
}

function handleFormSubmit(event) {
    event.preventDefault()

    const username = event.target.username.value;

    const email = event.target.email.value;

    const phone = event.target.phone.value;

    const obj = { username, email, phone };

    localStorage.setItem(email, JSON.stringify(obj));

    renderUsers();
}

function getUsersFromLocalStorage() {
    const users = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            const user = JSON.parse(localStorage.getItem(key));
            if (user && user.username && user.email && user.phone) {
                users.push(user);
            }
        } catch (e) {
            console.error("Invalid dada for key:", key);
        }
    }
    return users;

}

function renderUsers() {

    let ul = document.querySelector("ul")
    if (!ul) {
        ul = document.createElement("ul");
        document.body.appendChild(ul);
    }
    ul.innerHTML = "";
    const users = getUsersFromLocalStorage();
    users.forEach(user => {

    
    const li = document.createElement("li")

        li.textContent = `${user.username} - ${user.email} - ${user.phone}`;

        ul.appendChild(li)
})
}

if (typeof module !== "undefined") {
    module.exports =handleFormSubmit
}