import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from './localStorage';

function Goals() {
  const [goals, setGoals] = useState([]);

  const addGoal = (e, goals) => {
    if (e.target.tagName === 'INPUT') {
      if (e.key === 'Enter' && e.target.value.trim() !== '') {
        const goal = {
          id: goals ? goals.length + 1 : 1,
          title: e.target.value.trim(),
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false,
          done: false,
        };
        setGoals([...goals, goal]);
        setLocalStorage('goals', [...goals, goal]);
        e.target.value = '';
      }
    }
    if (e.target.tagName === 'BUTTON' && e.target.previousSibling.value.trim() !== '') {
      const goal = {
        id: goals ? goals.length + 1 : 1,
        title: e.target.previousSibling.value.trim(),
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
        done: false,
      };
      setGoals([...goals, goal]);
      setLocalStorage('goals', [...goals, goal]);
      e.target.previousSibling.value = '';
    }
  };

  useEffect(() => {
    if (getLocalStorage('goals')) {
      setGoals(getLocalStorage('goals'));
    }
  }, []);

  const handleComplete = (e, day) => {
    // For now I am using this approch to complete the goals
    // but I will change it later if I found a better way
    const index = e.target.id - 1;
    if (goals[index][day] === false) {
      goals[index][day] = true;
      setLocalStorage('goals', goals);
      e.target.style.backgroundColor = 'green';
    } else {
      goals[index][day] = false;
      setLocalStorage('goals', goals);
      e.target.style.backgroundColor = 'white';
    }
    if (goals[index].mon && goals[index].tue && goals[index].wed && goals[index].thu
      && goals[index].fri && goals[index].sat && goals[index].sun) {
      goals[index].done = true;
      e.target.parentNode.parentNode.parentNode.firstChild.style.textDecoration = 'line-through';
      setLocalStorage('goals', goals);
    } else {
      goals[index].done = false;
      e.target.parentNode.parentNode.parentNode.firstChild.style.textDecoration = 'none';
      setLocalStorage('goals', goals);
    }
  };

  return (
    <div className="w-screen md:mb-16">
      <div className="bg-gradient-to-b from-transparent to-gray-200 backdrop-blur-xl w-full h-full flex flex-col justify-start items-center py-32 lg:py-60 lg:pb-96 overflow-scroll scrollbar-hide">
        <div className="sm:w-6/6 md:w-5/6 bg-gray-500/50 p-4 rounded-xl shadow-xl shadow-gray-500/70 border border-gray-500">
          <h1 className="text-4xl font-bold m-4 hidden">Todo</h1>
          <div className="flex justify-between items-center">
            <input className="w-full p-3 shadow-xl shadow-gray-700 outline-0 shadow-inner rounded-tl-xl rounded-bl-xl text-gray-900 hover:bg-gray-300 focus:bg-gray-300 bg-gray-600/50" placeholder="Create a new Goal!" onKeyUp={(e) => addGoal(e, goals)} />
            <button type="button" className="px-2 py-1 text-4xl rounded-tr-xl rounded-br-xl bg-gray-600/50 outline-0 shadow-inner text-gray-900" onClick={(e) => addGoal(e, goals)}>
              &#8629;
            </button>
          </div>
          <div className="flex justify-center items-center w-full mt-10">
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
              <tbody>
                {goals.map((goal) => (
                  <tr key={goal.id}>
                    <td className={`${goal.done ? 'line-through' : 'no-line-through'} border-b border-r border-gray-300 p-2`}>{goal.title}</td>
                    <td className="border-b border-r border-gray-300 p-2 text-center">
                      <button id={goal.id} type="button" className={`${goal.mon ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'mon')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                    <td className="border-b border-r border-gray-300 p-2 text-center">
                      <button id={goal.id} type="button" className={`${goal.tue ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'tue')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                    <td className="border-b border-r border-gray-300 p-2 text-center">
                      <button id={goal.id} type="button" className={`${goal.wed ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'wed')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                    <td className="border-b border-r border-gray-300 p-2 text-center">
                      <button id={goal.id} type="button" className={`${goal.thu ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'thu')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                    <td className="border-b border-r border-gray-300 p-2 text-center">
                      <button id={goal.id} type="button" className={`${goal.fri ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'fri')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                    <td className="border-b border-r border-gray-300 p-2 text-center">
                      <button id={goal.id} type="button" className={`${goal.sat ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'sat')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                    <td className="border-b border-r border-gray-300 p-2 text-center">
                      <button id={goal.id} type="button" className={`${goal.sun ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'sun')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                    <td className="border-b border-r border-gray-300 text-center">
                      <button id={goal.id} type="button" className={`${goal.done ? 'bg-green-700' : 'bg-gray-100'} w-6 h-6 rounded-full border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e, 'done')}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
