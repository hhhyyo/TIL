import Model from './Model.js';

const $newTodo = document.querySelector('.new-todo');
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

const render = () => {
  const _todos = Model.getTodos().filter(todo =>
    Model.getCurrentFilter() === 'active'
      ? !todo.completed
      : Model.getCurrentFilter() === 'completed'
      ? todo.completed
      : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) => `
        <li data-id="${id}">
            <div class="view">
                <input type="checkbox" class="toggle" ${
                  completed ? 'checked' : ''
                }/>
                <label>${content}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${content}" />
        </li>`
    )
    .join('');

  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', !Model.getTodos().length)
  );

  const activeTodos = Model.getTodos().filter(todo => !todo.completed);

  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  const completedTodos = Model.getTodos().filter(todo => todo.completed);

  $clearCompleted.classList.toggle('hidden', !completedTodos.length);
};

const View = {
  render,
  $newTodo,
  $toggleAll,
  $todoList,
  $filters,
  $clearCompleted
};

export default View;
