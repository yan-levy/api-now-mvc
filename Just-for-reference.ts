import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get('/list', async (req: Request, res: Response) => {
	const result = await prisma.products.findMany();
	return res.json(result);
});

// Get products by Id
app.get('/:id', async (req: Request, res: Response) => {
	const id = req.params.id;
	const products = await prisma.products.findUnique({
		where: {
			id: Number(id),
		},
	});
	res.json(products);
});

app.post('/create', async (req: Request, res: Response) => {
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

	const products = await prisma.products.create({
		data: {
			name: name,
			description: description,
			provider: provider,
			quantity: quantity,
		},
	});
	res.json(products);
});

app.put('/edit/:id', async (req: Request, res: Response) => {
	const id = req.params.id;
	const { name, description, provider, quantity } = req.body;
	const updatedProducts = await prisma.products.update({
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
	res.json(updatedProducts);
});

app.delete('/:id', async (req: Request, res: Response) => {
	const id = req.params.id;
	const deletedProduct = await prisma.products.delete({
		where: {
			id: Number(id),
		},
	});
	res.json(deletedProduct);
});
