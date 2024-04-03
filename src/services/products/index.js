import http from "../../http-common"

class ProductsService {
    getAllProducts() {
        return http.get('https://fakestoreapi.com/products')
            .then((data) => data.data);
    }
}

export default new ProductsService();
