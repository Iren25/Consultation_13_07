const formElement = document.getElementById('form');
const listElement = document.getElementById('recipes-list');
console.log(formElement);
let currentId = 0; // счетчик для id

// будем слушать форму - событие отправки формы === 'submit'
formElement.addEventListener('submit', (event) =>{
    event.preventDefault(); // предотвращает переход на другую страницу
    // console.log('Отправка формы');
    // можем получить значение полей из формы
    // console.log(event.target); // тот элемент, в котором происходит событие
    // в данном случае это сама форма
    // console.log(event.target.title); // <input type="text" placeholder="название блюда" name="title">
    console.log(event.target.title.value); // значение которое введено в поле input под name title
    console.log(event.target.description.value); // значение которое введено в поле input под name description
    const liElement = document.createElement('li');
    liElement.textContent = `${event.target.title.value} ${event.target.description.value}`;
    liElement.style.backgroundColor = 'lightcyan';
    liElement.id = 'id' + currentId; //
    liElement.classList.add('recipe');
    currentId++;
    // прикрепим новый элемент внутрь выбранного: li внутрь ul
    listElement.append(liElement);
    event.target.title.value = '';
    event.target.description.value = '';

});
