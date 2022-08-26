export const getImage = (path) => {
  return chrome.runtime.getURL(path);
};
