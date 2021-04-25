export const formatCash = (value) => {
  const num = `${value}`;
  const position = num.length > 4 ? 3 : 2;
  return num.slice(0,position) + "," + num.slice(position);
};


export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};