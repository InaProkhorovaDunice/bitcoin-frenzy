import format from 'date-fns/format';

export const getDate = () => {
  return format(new Date(), `dd/MM/yyyy' 'HH:mm`);
};
