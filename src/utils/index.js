export const formatNumericOutput = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getDate = () => {
  const format = require('date-fns/format');
  return format(new Date(), `dd/MM/yyyy' 'HH:mm`);
};
