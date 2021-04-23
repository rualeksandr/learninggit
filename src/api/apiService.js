import products from "../database/products";

const apiService = {
    fetchProducts() {
        return products;
    }
};

export default apiService;