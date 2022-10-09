import React from 'react';
import { AiOutlineEnter } from 'react-icons/ai';

function Goals() {
  const goals = [
    {
      id: 1,
      title: 'Buy coffee',
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: true,
      done: true,
    },
    {
      id: 2,
      title: 'Build my app!',
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: true,
      sat: false,
      sun: false,
      done: false,
    },
    {
      id: 3,
      title: 'Build my app!',
      mon: false,
      tue: false,
      wed: true,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      done: false,
    },
  ];

  const handleComplete = (e) => {
    const index = e.target.id - 1;
    console.log(goals[index].completed);
    if (goals[index].completed === false) {
      goals[index].completed = true;
      e.target.style.backgroundColor = 'green';
      // e.target.nextSibling.style.textDecoration = 'line-through';
    } else {
      goals[index].completed = false;
      e.target.style.backgroundColor = 'white';
      // e.target.nextSibling.style.textDecoration = 'none';
    }
  };

  const GoalsList = goals.map((goal) => (
    <tr key={goal.id}>
      <td className="border-b border-r border-gray-300 p-2">{goal.title}</td>
      <td className="border-b border-r border-gray-300 p-2 text-center">
        <button id={goal.id} type="button" className={`${goal.mon ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
      <td className="border-b border-r border-gray-300 p-2 text-center">
        <button id={goal.id} type="button" className={`${goal.tue ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
      <td className="border-b border-r border-gray-300 p-2 text-center">
        <button id={goal.id} type="button" className={`${goal.wed ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
      <td className="border-b border-r border-gray-300 p-2 text-center">
        <button id={goal.id} type="button" className={`${goal.thu ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
      <td className="border-b border-r border-gray-300 p-2 text-center">
        <button id={goal.id} type="button" className={`${goal.fri ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
      <td className="border-b border-r border-gray-300 p-2 text-center">
        <button id={goal.id} type="button" className={`${goal.sat ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
      <td className="border-b border-r border-gray-300 p-2 text-center">
        <button id={goal.id} type="button" className={`${goal.sun ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
      <td className="border-b border-r border-gray-300 text-center">
        <button id={goal.id} type="button" className={`${goal.done ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
          <p className="text-2xl text-gray-500 hidden">✓</p>
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="w-screen max-h-fil">
      <div className="bg-gradient-to-b from-transparent to-gray-200 backdrop-blur-xl w-full h-full flex flex-col justify-start items-center py-32 lg:py-60 lg:pb-96">
        <div className="w-5/6 bg-gray-500/50 p-4 rounded-xl shadow-xl shadow-gray-500/70 border border-gray-500">
          <h1 className="text-4xl font-bold m-4 hidden">Todo</h1>
          <div className="flex justify-between items-center">
            <input className="w-full p-3 shadow-xl shadow-gray-700 outline-0 shadow-inner rounded-tl-xl rounded-bl-xl text-gray-900 hover:bg-gray-300 focus:bg-gray-300 bg-gray-600/50" placeholder="Create a new Goal!" />
            <button type="button" className="p-3 rounded-tr-xl rounded-br-xl bg-gray-600/50 outline-0 shadow-inner text-gray-900">
              <AiOutlineEnter className="text-2xl text-" />
            </button>
          </div>
          <div className="flex justify-center items-center w-full mt-10 w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b border-r border-gray-300 p-2">Goal</th>
                  <th className="border-b border-r border-gray-300 p-2">Mon</th>
                  <th className="border-b border-r border-gray-300 p-2">Tue</th>
                  <th className="border-b border-r border-gray-300 p-2">Wed</th>
                  <th className="border-b border-r border-gray-300 p-2">Thu</th>
                  <th className="border-b border-r border-gray-300 p-2">Fri</th>
                  <th className="border-b border-r border-gray-300 p-2">Sat</th>
                  <th className="border-b border-r border-gray-300 p-2">Sun</th>
                  <th className="border-b border-r border-gray-300 p-2">Done</th>
                </tr>
              </thead>
              <tbody>{GoalsList}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
