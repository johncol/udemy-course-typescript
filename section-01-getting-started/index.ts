import axios from 'axios';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (todo: ToDo) => {
  const { id, title, completed } = todo;
  console.log(`
    TODO with ID ${id}
    Has title of "${title}"
    Is it finished? ${completed}
  `);
};

const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  const todo: ToDo = response.data;
  logTodo(todo);
});
