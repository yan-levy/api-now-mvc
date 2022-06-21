import { Router } from 'express';
import { ListProductsController } from '../../controllers/ProductsController';
const router = Router();
const listProducts = new ListProductsController();

router.get('/', listProducts.listAllProducts);
router.get('/:id', listProducts.productById);
router.post('/', listProducts.createProduct);
router.put('/:id', listProducts.editProduct);
router.delete('/:id', listProducts.deleteProduct);

export { router };
