export const saveItem = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};
export const getItem = (itemName) => {
  const item = localStorage.getItem(itemName);
  return item ? JSON.parse(item) : item;
};
export const clearItem = (itemName) => {
  localStorage.removeItem(itemName);
};
