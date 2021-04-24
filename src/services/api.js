import axios from 'axios';

const api = axios.create({ baseURL: 'https://corebiz-test.herokuapp.com/api/v1' });

export const newsletter = {
  create: (params) => api.post('/newsletter', params),
};

export const products = {
  select: () => api.get(`/products`),
};
