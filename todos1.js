let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector("#search").addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#enter-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        title: e.target.elements.todoItem.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoItem.value = ''
})

document.querySelector('#hide-show').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
})