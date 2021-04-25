export const formatCash = (value) => {
  const num = `${value}`;
  const position = num.length > 4 ? 3 : 2;
  return num.slice(0,position) + "," + num.slice(position);
};