
const fruitListItems = document.querySelectorAll('.fruits li');

fruitListItems.forEach(li => {

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    const deleteBtn = li.querySelector('button');
    if (deleteBtn) {
        li.insertBefore(editBtn, deleteBtn.nextSibling);

    } else {
        li.appendChild(editBtn);
    }

    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            li.remove();
        })
    }

});

const addForm = document.querySelector('form');
const fruitInput = addForm.querySelector('input[type="text"]');
const fruitList = document.querySelector('.fruits');

addForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let fruitName = fruitInput.value.trim();
    if (fruitName === "") return;

    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.appendChild(document.createTextNode(fruitName));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    newLi.appendChild(deleteBtn);
    newLi.appendChild(editBtn);

    fruitList.appendChild(newLi);

    deleteBtn.addEventListener('click', () =>
        newLi.remove());
    fruitInput.value = '';

})