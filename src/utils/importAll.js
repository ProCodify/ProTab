const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '').split('.')[0]] = r(item);
  });
  return images;
};

export default importAll;
