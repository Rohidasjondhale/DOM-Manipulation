
const form = document.querySelector('form');
const fruitInput = document.querySelector('input[type="text"]');
const fruitList = document.querySelector('.fruits');

const descInput = document.createElement('input');
descInput.type = 'text';
descInput.placeholder = 'Enter fruit description';
descInput.id = 'description';
form.insertBefore(descInput, form.querySelector('button'));

form.insertBefore(descInput, form.querySelector('button'));


[...fruitList.children].forEach(li => {
    const text = li.firstChild.textContent.trim();
    const olddesc = li.querySelector('p') ? li.querySelector('p').textcontext : '';


    li.innerHTML = `
    <span class="fruit-name">${text}</span>
    <button class="delete-btn">x</button>
    <button class="edit-btn">Edit</button>
    <p style="font-style:italic">${olddesc}</p>
    `;

    li.querySelector('.delete-btn').onclick = () => li.remove();
});

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!fruitInput.value.trim() || !descInput.value.trim()) return;

    const li = document.createElement('li');
    li.className = 'fruit';
    li.innerHTML = `
    <span class="fruit-name">${fruitInput.value.trim}</span>
     <button class="delete-btn">x</button>
     <button class="edit-btn">Edit</button>
     <p style="font-style:italic">${descInput.value.trim()}</p>`;
    li.querySelector('.delete-btn').onclick = () => li.remove();
    fruitList.appendChild(li);

    fruitInput.value = '';
    descInput.value = '';

});

const filter = document.getElementById('filter');

filter.addEventListener('keyup', e => {
    const text = e.target.value.toLowerCase();

    [...fruitList.children].forEach(li => {

        const fruitNameE1 = li.querySelector('.fruit-name');
        const descE1 = li.querySelector('p');
        
        const fruitName = fruitNameE1 ? fruitNameE1.textContent.toLowerCase() : '';
        const fruitDescription = descE1 ? descE1.textContent.toLowerCase() : '';

        li.style.display = (fruitName.includes(text) || fruitDescription.includes(text)) ? '' : 'none';

    });
});
