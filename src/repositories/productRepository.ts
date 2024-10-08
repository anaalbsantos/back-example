import { Prisma, Product } from '@prisma/client';
import prisma from '@database';

class ProductRepository {
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const product = await prisma.product.create({ data });
    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
  }
}

export default new ProductRepository();
