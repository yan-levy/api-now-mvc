import express from 'express';
import { router } from './routes/products/products.routes';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/product', router);

app.listen(8080, '0.0.0.0', () => {
	console.log('Server running on PORT 8080');
});
