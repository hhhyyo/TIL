import Model from './Model.js';
import View from './View.js';

window.addEventListener('DOMContentLoaded', Model.fetchTodos);

View.$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = View.$newTodo.value.trim();

  if (content) Model.addTodo(content);

  View.$newTodo.value = '';
};

View.$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  Model.toggleTodoCompleted(e.target.closest('li').dataset.id);
};

View.$toggleAll.onchange = () => {
  Model.toggleAllTodosCompleted(View.$toggleAll.checked);
};

View.$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

View.$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  Model.updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

View.$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  Model.removeTodo(e.target.closest('li').dataset.id);
};

View.$clearCompleted.onclick = Model.removeAllCompletedTodos;

View.$filters.onclick = e => {
  if (!e.target.matches('.filters a')) return;

  [...View.$filters.querySelectorAll('a')].forEach($a =>
    $a.classList.toggle('selected', $a === e.target)
  );

  Model.setFilter(e.target.id);
};

const Controller = {};

export default Controller;
