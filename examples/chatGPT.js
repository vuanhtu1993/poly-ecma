import { render, useState, useEffect, router } from '../lib';

// Define the initial state of the todo list
const initialTodoList = [];

// Define a component to render the todo list
const TodoList = (todos, setTodos) => {
  // Define the state of the new todo input field
  const [newTodo, setNewTodo] = useState('');

  // Handle form submissions to add new todo items to the list
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  // Handle checkbox clicks to toggle todo item completion status
  const handleTodoCheckboxChange = (event, index) => {
    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], completed: event.target.checked },
      ...todos.slice(index + 1),
    ]);
  };

  // Handle button clicks to remove todo items from the list
  const handleTodoRemoveClick = (event, index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  // Render the todo list as an unordered list
  return `
    <div>
      <form onsubmit="${handleNewTodoSubmit}">
        <input type="text" value="${newTodo}" oninput="${(event) =>
    setNewTodo(event.target.value)}" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        ${todos
          .map(
            (todo, index) => `
              <li>
                <label>
                  <input type="checkbox" ${
                    todo.completed ? 'checked' : ''
                  } onchange="${(event) =>
              handleTodoCheckboxChange(event, index)}" />
                  ${todo.text}
                </label>
                <button onclick="${(event) =>
                  handleTodoRemoveClick(event, index)}">Remove</button>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  `;
};

// Define the app's routes
router
  .on('/', () => {
    // Get the saved todo list from local storage
    const savedTodoList = JSON.parse(
      localStorage.getItem('todoList') || '[]'
    );

    // Define the state of the todo list
    const [todoList, setTodoList] = useState(savedTodoList || initialTodoList);

    // Save the todo list to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    // Render the todo list
    render(() => TodoList(todoList, setTodoList), document.getElementById("app"));
  })
  .resolve();
