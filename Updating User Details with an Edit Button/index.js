    document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
        const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

        for (let i = 0; i < usersList.length; i++){
            display(usersList[i]);
        }
    }

    function handleFormSubmit(event) {  
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email.value;

        const phone = event.target.phone.value;

        const editId = sessionStorage.getItem("editId");

        if (editId) {
            editData(editId, { username, email, phone });
        } else {
            const userDetails = {
                id: Date.now().toString(),
                username,
                email,
                phone,
            };
            const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
            usersList.push(userDetails);

            localStorage.setItem("usersList", JSON.stringify(usersList));
            display(userDetails);
        }
        event.target.username.value = "";
        event.target.email.value = "";
        event.target.phone.value = "";

        sessionStorage.removeItem("editId");
    }

    function display(data) {
        const ul = document.querySelector("ul");

        const li = document.createElement("li");
        li.dataset.id = data.id;

        const span = document.createElement("span");
        span.textContent = `${data.username} ${data.email} ${data.phone}`;
        li.appendChild(span);
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteData(data.id, li));
        li.appendChild(deleteButton);
        const editButton = document.createElement("button");

        editButton.textContent = "edit";
        editButton.addEventListener("click", () => {
            document.querySelector("input[name='username']").value = data.username;
            document.querySelector("input[name='email']").value = data.email;
            document.querySelector("input[name='phone']").value = data.phone;

            sessionStorage.setItem("editId", data.id);
        });
        li.appendChild(editButton);

        ul.appendChild(li);
    }

    function deleteData(id, li) {
        const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

        const updateUsersList = usersList.filter((u) => u.id !== id);

        localStorage.setItem("usersList", JSON.stringify(updateUsersList));
        li.remove();
    }


    function addData(userDetails) {
        const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
        userDetails.id = Date.now().toString();
        usersList.push(userDetails);

        localStorage.setItem("usersList", JSON.stringify(usersList));
        display(userDetails);
    }

function editData(id, newData) {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    const updateUsersList = usersList.map((u) => {
        if (u.id == id) {
            return { ...u, ...newData };
        }
        return u;
    })
    localStorage.setItem("usersList", JSON.stringify(updateUsersList));



    const li = document.querySelector(`li[data-id="${id}"]`);
    if (li) {
        const span = li.querySelector("span");
        if (span) {
            span.textContent = `${newData.username} ${newData.email} ${newData.phone} `;
        }

    }
}

    module.exports = handleFormSubmit