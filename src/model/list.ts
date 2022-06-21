import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class ListProducts {
	async listAllProducts() {
		const result = await prisma.products.findMany();
		return result;
	}

	async productById(id: number) {
		const result = await prisma.products.findUnique({
			where: {
				id: id,
			},
		});
		return result;
	}

	createProduct(
		name: string,
		description: string,
		provider: string,
		quantity: number
	) {
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

	async editProduct(
		id: number,
		name: string,
		description: string,
		provider: string,
		quantity: number
	) {
		const result = await prisma.products.update({
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
	}

	async deleteProduct(id: number) {
		const result = await prisma.products.delete({
			where: {
				id: Number(id),
			},
		});
		return result;
	}
}
