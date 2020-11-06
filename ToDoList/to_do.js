var listElement = document.querySelector('#app ul'); //capta o dado da lista
var inputElement = document.querySelector('#app input'); //capta o dado do input
var buttonElement = document.querySelector('#app button'); //capta o dado do botão

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; //transformando todos eles em array ou coloca um array vazio

function renderTodo() { //renderizando a lista
    listElement.innerHTML = ''; //removendo os itens que já estavam no var todos

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#') //criado para que seja um link para a função de exclusão

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir'); //criando a funcionalidade de exclusão de itens

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodo(); //executando a renderização

function addTodo() { //adciona a atividade a lista
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveToStorage();
}

buttonElement.onclick = addTodo; //quando clicado ele executa todo o processo acima

function deleteTodo(pos) { //função para deletar um item da lista
    todos.splice(pos, 1);
    renderTodo()
    saveToStorage();
}

function saveToStorage() { //função feita para salvar os dados temporarios da pagina
    localStorage.setItem('list_todos', JSON.stringify(todos));
}