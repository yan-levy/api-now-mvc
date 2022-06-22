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
exports.ListProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ListProducts {
    listAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.products.findMany();
            return result;
        });
    }
    productById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.products.findUnique({
                where: {
                    id: id,
                },
            });
            return result;
        });
    }
    createProduct(name, description, provider, quantity) {
        const result = prisma.products.create({
            data: {
                name: name,
                description: description,
                provider: provider,
                quantity: quantity,
            },
        });
        return result;
    }
    editProduct(id, name, description, provider, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.products.update({
                where: {
                    id: Number(id),
                },
                data: {
                    name: name,
                    description: description,
                    provider: provider,
                    quantity: quantity,
                },
            });
            return result;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.products.delete({
                where: {
                    id: Number(id),
                },
            });
            return result;
        });
    }
}
exports.ListProducts = ListProducts;
