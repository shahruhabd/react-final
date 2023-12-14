import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com';

const ApiService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      const transformedData = response.data.map((product) => ({
        ...product,
        formattedPrice: `$${product.price.toFixed(2)}`,
      }));
      return transformedData;
    } catch (error) {
      console.error('Error fetching and transforming products:', error);
      throw error;
    }
  },
};

export default ApiService;