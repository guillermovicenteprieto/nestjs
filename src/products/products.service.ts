import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  async findAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOneProduct(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).exec();
  }

  async createProduct(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    const productNew = newProduct.save();
    return await productNew
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, product, { new: true });
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id).exec();
  }
}
