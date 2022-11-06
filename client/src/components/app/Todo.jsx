import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from './localStorage';

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (e, todos) => {
    if (e.target.tagName === 'INPUT') {
      if (e.key === 'Enter' && e.target.value.trim() !== '') {
        const todo = {
          id: todos ? todos.length + 1 : 1,
          title: e.target.value.trim(),
          completed: false,
        };
        setTodos([...todos, todo]);
        setLocalStorage('todos', [...todos, todo]);
        e.target.value = '';
      }
    }
    if (e.target.tagName === 'BUTTON' && e.target.previousSibling.value.trim() !== '') {
      const todo = {
        id: todos ? todos.length + 1 : 1,
        title: e.target.previousSibling.value.trim(),
        completed: false,
      };
      setTodos([...todos, todo]);
      setLocalStorage('todos', [...todos, todo]);
      e.target.previousSibling.value = '';
    }
  };

  useEffect(() => {
    if (getLocalStorage('todos')) {
      setTodos(getLocalStorage('todos'));
    }
  }, []);

  const handleComplete = (e) => {
    const index = e.target.id - 1;
    if (todos[index].completed === false) {
      todos[index].completed = true;
      setLocalStorage('todos', todos);
      e.target.style.backgroundColor = 'green';
      e.target.nextSibling.style.textDecoration = 'line-through';
    } else {
      todos[index].completed = false;
      setLocalStorage('todos', todos);
      e.target.style.backgroundColor = 'white';
      e.target.nextSibling.style.textDecoration = 'none';
    }
  };

  return (
    <div className="w-screen md:mb-16">
      <div className="overflow-scroll scrollbar-hide bg-gradient-to-b from-transparent to-gray-200 backdrop-blur-xl w-full h-full flex flex-col justify-start items-center py-32 lg:py-60 lg:pb-96">
        <div className="w-5/6 bg-gray-500/50 p-4 rounded-xl shadow-xl shadow-gray-500/70 border border-gray-500">
          <h1 className="text-4xl font-bold m-4 hidden">Todo</h1>
          <div className="flex justify-between items-center">
            <input className="w-full p-3 shadow-xl shadow-gray-700 outline-0 shadow-inner rounded-tl-xl rounded-bl-xl text-gray-900 hover:bg-gray-300 focus:bg-gray-300 bg-gray-600/50" placeholder="Create your todo task!" onKeyUp={(e) => addTodo(e, todos)} />
            <button type="button" className="flex justify-center items-center py-1 px-2 text-4xl rounded-tr-xl rounded-br-xl bg-gray-600/50 outline-0 shadow-inner text-gray-900" onClick={(e) => addTodo(e, todos)}>
              &#8629;
            </button>
          </div>
          {todos.map((todo) => (
            <div key={todo.id} className="flex w-full px-2 py-4 border-b">
              <label htmlFor="todo" className="flex items-center">
                <input type="checkbox" id="todo" className="hidden" />
                <button id={todo.id} type="button" className={`${todo.completed ? 'bg-green-700' : 'bg-gray-100'} p-3 flex items-center justify-center rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
                  <p className="text-2xl text-gray-500 hidden">✓</p>
                </button>
                <p className={`${todo.completed ? 'line-through' : 'no-line-through'} text-gray-900`}>{todo.title}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
