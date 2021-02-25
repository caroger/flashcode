export const parseDate = (date) => {
  let newDate = new Date(date).toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  return newDate;
}