import productList from './productList.json';

const api = {};

api.getAllProduct = () => (
  [ ...productList ]  
);

api.getProductById = (id) => (
  productList.find(product => product.ProductID === id)
);

export default api;
