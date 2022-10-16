const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
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

export default { getItem, setItem, clearItem, hasItem };
