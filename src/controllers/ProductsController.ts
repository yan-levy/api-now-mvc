import { empty } from '@prisma/client/runtime';
import { count } from 'console';
import { Request, Response } from 'express';
import { ListProducts } from '../model/list';

const list = new ListProducts();

export class ListProductsController {
	async listAllProducts(req: Request, res: Response) {
		const result = await list.listAllProducts();
		if (result.length == 0)
			return res.status(404).send('Não existem produtos cadastrados')
		return res.json(result);
	}

	async productById(req: Request, res: Response) {
		const id = Number(req.params.id);
		const result = await list.productById(id);
		if (result === null) return res.status(404).send('O produto não existe');
		return res.json(result);
	}

	async createProduct(req: Request, res: Response) {
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
		const result = await list.createProduct(
			name,
			description,
			provider,
			quantity
		);
		return res.json(result);
	}

	async editProduct(req: Request, res: Response) {
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

		const result = await list.editProduct(
			Number(id),
			name,
			description,
			provider,
			quantity
		);
		return res.json(result);
	}

	async deleteProduct(req: Request, res: Response) {
		const id = req.params.id;
		const result = await list.deleteProduct(Number(id));
		return res.json(result);
	}
}
