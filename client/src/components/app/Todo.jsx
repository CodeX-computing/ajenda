import React from 'react';
import { AiOutlineEnter } from 'react-icons/ai';

function Todo() {
  const todos = [
    {
      id: 1,
      title: 'Buy coffee',
      completed: false,
    },
    {
      id: 2,
      title: 'Build my app!',
      completed: true,
    },
    {
      id: 3,
      title: 'Go to the gym',
      completed: false,
    },
    {
      id: 4,
      title: 'Learn Go language',
      completed: false,
    },
  ];

  const handleComplete = (e) => {
    const index = e.target.id - 1;
    if (todos[index].completed === false) {
      todos[index].completed = true;
      e.target.style.backgroundColor = 'green';
      e.target.nextSibling.style.textDecoration = 'line-through';
    } else {
      todos[index].completed = false;
      e.target.style.backgroundColor = 'white';
      e.target.nextSibling.style.textDecoration = 'none';
    }
  };

  const todoList = todos.map((todo) => (
    <div key={todo.id} className="flex w-full px-2 py-4 border-b">
      <label htmlFor="todo" className="flex items-center">
        <input type="checkbox" id="todo" className="hidden" />
        <button id={todo.id} type="button" className={`${todo.completed ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
        <p className={`${todo.completed ? 'line-through' : 'no-line-through'} text-gray-900`}>{todo.title}</p>
      </label>
    </div>
  ));

  return (
    <div className="w-screen md:mb-32">
      <div className="bg-gradient-to-b from-transparent to-gray-200 backdrop-blur-xl w-full h-full flex flex-col justify-start items-center py-32 lg:py-60 lg:pb-96">
        <div className="w-5/6 bg-gray-500/50 p-4 rounded-xl shadow-xl shadow-gray-500/70 border border-gray-500">
          <h1 className="text-4xl font-bold m-4 hidden">Todo</h1>
          <div className="flex justify-between items-center">
            <input className="w-full p-3 shadow-xl shadow-gray-700 outline-0 shadow-inner rounded-tl-xl rounded-bl-xl text-gray-900 hover:bg-gray-300 focus:bg-gray-300 bg-gray-600/50" placeholder="Create your todo task!" />
            <button type="button" className="p-3 rounded-tr-xl rounded-br-xl bg-gray-600/50 outline-0 shadow-inner text-gray-900">
              <AiOutlineEnter className="text-2xl text-" />
            </button>
          </div>
          {todoList}
        </div>
      </div>
    </div>
  );
}

export default Todo;
