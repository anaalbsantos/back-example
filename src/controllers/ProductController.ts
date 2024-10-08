import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class ProductController {
  // Create a new product
  async create(req: Request, res: Response) {
    const { name, description, price, image } = req.body;
    try {
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price,
          image,
        },
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' });
    }
  }

  // Get all products
  async get(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }

  // Get a product by ID
  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await prisma.product.findUnique({
        where: { id },
      });
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  }

  // Update a product by ID
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, price, image } = req.body;
    try {
      const product = await prisma.product.update({
        where: { id },
        data: {
          name,
          description,
          price,
          image,
        },
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }

  // Delete a product by ID
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await prisma.product.delete({
        where: { id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }
}

export default new ProductController();