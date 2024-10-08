import {Prisma, Product} from '@prisma/client';
import prisma from '@database';


class ProductRepository {
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const product = await prisma.product.create({data});
    return product;
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({where: {id}});
    return product;
  }

  async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
    const product = await prisma.product.update({where: {id}, data});
    return product;
  }

  async delete(id: string): Promise<Product> {
    const product = await prisma.product.delete({where: {id}});
    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
  }
}

export default new ProductRepository();




