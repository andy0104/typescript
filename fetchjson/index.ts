import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {  
  const data = response.data as Todo;  
  logTodo(data.id, data.title, data.completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  const templateStr = `
    The todo with id: ${id}
    Has a title of: ${title}
    Is it finished? ${completed} 
  `;
  console.log(templateStr);
}