const getStatusByCode = (code) => {
  if (typeof code !== 'number') code = Number.parseInt(code);
  if (typeof code !== 'number') throw new Error('invalid status code');
  let status = '';
  if (code >= 200 && code < 300) status = 'success';
  else status = 'error';
  return status;
};

export default { getStatusByCode };
