"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ProductsController_1 = require("../../controllers/ProductsController");
const router = (0, express_1.Router)();
exports.router = router;
const listProducts = new ProductsController_1.ListProductsController();
router.get('/', listProducts.listAllProducts);
router.get('/:id', listProducts.productById);
router.post('/', listProducts.createProduct);
router.put('/:id', listProducts.editProduct);
router.delete('/:id', listProducts.deleteProduct);
