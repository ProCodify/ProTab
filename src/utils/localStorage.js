const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const clearItem = (key) => {
  localStorage.removeItem(key);
};
const hasItem = (key) => {
  return Object.keys(localStorage).includes(key);
};

export { getItem, setItem, clearItem, hasItem };
