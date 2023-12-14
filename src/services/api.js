const apiUrl = 'https://fakestoreapi.com';

const ApiService = {
  getProducts: async () => {
    const response = await fetch(`${apiUrl}/products`);
    const data = await response.json();
    return data;
  },
};

export default ApiService;