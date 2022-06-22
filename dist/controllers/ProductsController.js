"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsController = void 0;
const list_1 = require("../model/list");
const list = new list_1.ListProducts();
class ListProductsController {
    listAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield list.listAllProducts();
            if (result.length == 0)
                return res.status(404).send('Não existem produtos cadastrados');
            return res.json(result);
        });
    }
    productById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const result = yield list.productById(id);
            if (result === null)
                return res.status(404).send('O produto não existe');
            return res.json(result);
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, provider, quantity } = req.body;
            if (name.trim() == '') {
                return res.status(401).send('O nome do produto é obrigatório');
            }
            if (provider.trim() == '') {
                return res.status(401).send('O nome do fornecedor é obrigatório');
            }
            if (quantity == null) {
                return res.status(401).send('A quantidade é obrigatória');
            }
            const result = yield list.createProduct(name, description, provider, quantity);
            return res.json(result);
        });
    }
    editProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, provider, quantity } = req.body;
            const id = req.params.id;
            if (name.trim() == '') {
                return res.status(401).send('O nome do produto é obrigatório');
            }
            if (provider.trim() == '') {
                return res.status(401).send('O nome do fornecedor é obrigatório');
            }
            if (quantity == null) {
                return res.status(401).send('A quantidade é obrigatória');
            }
            const result = yield list.editProduct(Number(id), name, description, provider, quantity);
            return res.json(result);
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const result = yield list.deleteProduct(Number(id));
            return res.json(result);
        });
    }
}
exports.ListProductsController = ListProductsController;
