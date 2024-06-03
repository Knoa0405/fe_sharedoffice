export const formatLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export const formatTime = (date: Date) => date.toTimeString().split(' ')[0].slice(0, 5);

export const getInitialDates = () => {
  const today = new Date();

  const currentDate = formatLocalDate(today);
  const currentTime = formatTime(today);

  const endDate = new Date(today.getTime() + 60 * 60 * 1000);
  const endFormattedDate = formatLocalDate(endDate);
  const endTime = formatTime(endDate);

  return {
    currentDate,
    currentTime,
    endFormattedDate,
    endTime,
  };
};
