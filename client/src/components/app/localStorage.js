export const setLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getLocalStorage = () => JSON.parse(localStorage.getItem('todos'));
