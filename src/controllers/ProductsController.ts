import { Request, Response } from 'express';
import { ListProducts } from '../model/list';

const list = new ListProducts();

export class ListProductsController {
	async listAllProducts(req: Request, res: Response) {
		const result = await list.listAllProducts();
		return res.json(result);
	}

	async productById(req: Request, res: Response) {
		const id = Number(req.params.id);
		const result = await list.productById(id);
		return res.json(result);
	}

	async createProduct(req: Request, res: Response) {
		const { name, description, provider, quantity } = req.body;
		if (name.trim() == '') {
			res.statusCode = 401;
			return res.json({ error: 'O nome do produto é obrigatório' });
		}
		if (provider.trim() == '') {
			res.statusCode = 401;
			return res.json({ error: 'O nome do fornecedor é obrigatório' });
		}
		if (quantity == null) {
			res.statusCode = 401;
			return res.json({ error: 'A quantidade é obrigatória' });
		}
		const result = await list.createProduct(
			name,
			description,
			provider,
			quantity
		);
		res.statusCode = 200;
		return res.json(result);
	}

	async editProduct(req: Request, res: Response) {
		const { name, description, provider, quantity } = req.body;
		const id = req.params.id;
		if (name.trim() == '') {
			res.statusCode = 401;
			return res.json({ error: 'O nome do produto é obrigatório' });
		}
		if (provider.trim() == '') {
			res.statusCode = 401;
			return res.json({ error: 'O nome do fornecedor é obrigatório' });
		}
		if (quantity == null) {
			res.statusCode = 401;
			return res.json({ error: 'A quantidade é obrigatória' });
		}

		const result = await list.editProduct(
			Number(id),
			name,
			description,
			provider,
			quantity
		);
		res.statusCode = 200;
		return res.json(result);
	}

	async deleteProduct(req: Request, res: Response) {
		const id = req.params.id;
		const result = await list.deleteProduct(Number(id));
		return res.json(result);
	}
}
