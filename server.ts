import express from 'express';
import { router } from './src/routes/products/products.routes';
const app = express();

app.use(express.json());

app.use('/product', router);

app.listen(8080, () => {
	console.log('Server running on PORT 8080');
});
