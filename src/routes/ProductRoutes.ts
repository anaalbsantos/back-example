import { Router } from 'express';
import { ProductController } from '../controllers';

const productRouter = Router();

productRouter.route('/').post(ProductController.create);
productRouter.route('/').get(ProductController.readAll);

export default productRouter;
