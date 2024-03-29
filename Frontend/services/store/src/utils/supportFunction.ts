export const renderDate = (date: string) => {
  const month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const d = new Date(date);
  const newDate =
    d.getDate().toString().padStart(2, '0') + ' ' + month[d.getMonth()];
  return newDate;
};

export const renderTime = (time: string) => {
  const newTime = time?.split(':').slice(0, 2).join(':');
  return newTime;
};

export const validCity = (city: string) => {
  return city.replace('г ', '');
};

export const renderBithday = (date: string) => {
  if (date?.length === 10 && date.includes('-')) {
    const dateArr = date.split('-');
    return `${dateArr[1]}.${dateArr[1]}.${dateArr[0]}`;
  }
  return date;
};
export const renderBithdayFromFetch = (date: string) => {
  if (date?.length === 10 && date.includes('.')) {
    const dateArr = date.split('.');
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
  }
  return date;
};
