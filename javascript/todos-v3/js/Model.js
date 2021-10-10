import View from './View.js';

let todos = [];
let currentFilter = 'all';

const getTodos = () => todos;

const getActiveTodos = () => todos.filter(todo => !todo.completed);

const getCompletedTodos = () => todos.filter(todo => todo.completed);

const getFilteredTodos = () =>
  currentFilter === 'active'
    ? getActiveTodos()
    : currentFilter === 'completed'
    ? getCompletedTodos()
    : getTodos();

const setTodos = newTodos => {
  todos = newTodos;
  View.render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  View.render();
};

const fetchTodos = () => {
  setTodos([
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]);
};

const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

const toggleTodoCompleted = id => {
  setTodos(
    todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeAllCompletedTodos = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

const Model = {
  getTodos,
  getActiveTodos,
  getCompletedTodos,
  getFilteredTodos,
  setTodos,
  setFilter,
  fetchTodos,
  addTodo,
  toggleTodoCompleted,
  toggleAllTodosCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompletedTodos
};

export default Model;
