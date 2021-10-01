// todos 배열을 인수로 전달받아 html 문자열을 생성해 반환하는 함수를 작성하라.

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const render = todos => {
  /* Do something */
  let result = '';

  todos.forEach(todo => {
    const { id, content, completed } = todo;
    result += `
      <li id="${id}">
        <label><input type="checkbox" ${
          completed ? 'checked' : ''
        }> ${content}</label>
      </li>`;
  });

  return result;
};

console.log(render(todos));
