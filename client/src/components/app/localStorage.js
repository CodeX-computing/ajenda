export const setLocalStorage = (storage, todos) => {
  localStorage.setItem(storage, JSON.stringify(todos));
};

export const getLocalStorage = (storage) => JSON.parse(localStorage.getItem(storage));
