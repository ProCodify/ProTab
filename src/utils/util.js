const getStatusByCode = (code) => {
  if (typeof code !== 'number') code = Number.parseInt(code);
  if (typeof code !== 'number') throw new Error('invalid status code');
  let status = '';
  if (code >= 200 && code < 300) status = 'success';
  else status = 'error';
  return status;
};

export const getTimeStatus = () => {
  const now = new Date();
  const hour = now.getHours();
  let status = '';
  if (hour >= 7 && hour <= 12) status = 'morning';
  else if (hour >= 13 && hour <= 15) status = 'noon';
  else if (hour >= 16 && hour <= 18) status = 'afternoon';
  else status = 'night';
  return status;
};

export default { getStatusByCode, getTimeStatus };
