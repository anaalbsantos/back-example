import { Request, Response, NextFunction } from 'express';
import { ProductRepository } from '../repositories';
import { Product } from '../DTOs';

class ProductController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { name, value, image } = Product.parse(request.body);

      const product = await ProductRepository.create({ name, value, image });

      response.locals = {
        status: 201,
        message: 'Product created',
        data: product,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(request: Request, response: Response, next: NextFunction) {
    try {
      const products = await ProductRepository.findAll();

      response.locals = {
        status: 200,
        data: products,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new ProductController();
