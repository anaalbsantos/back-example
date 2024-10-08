import Router from 'express';
import { ProductController } from '../controllers';

const ProductRouter = Router();

ProductRouter.route('/')
  .post(
    ProductController.create,
  );

ProductRouter.route('/:productId')
    .get(
        ProductController.getProductById,
    );

ProductRouter.route('/')
    .get(
        ProductController.get,
    );

ProductRouter.route('/:productId')
    .patch(
        ProductController.update,
    );

ProductRouter.route('/:productId')
    .delete(
        ProductController.delete,
    );

export default ProductRouter;
