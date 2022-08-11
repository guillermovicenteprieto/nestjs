import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../interfaces/product.interface';
//import { ProductSchema } from '../schemas/product.schema';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll(): Promise<Product[]> {
        return await this.productsService.findAllProducts();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Product> {
        return await this.productsService.findOneProduct(id);
    }

    @Post()
    async create(@Body() product: CreateProductDto): Promise<Product> {
        return await this.productsService.createProduct(product);
    }
    

    @Put(':id')
    async update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
        return await this.productsService.updateProduct(id, product);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Product> {
        return await this.productsService.deleteProduct(id);
    }
}



    /*
    // POST
    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        this.productsService.create(createProductDto);
    }

    // GET
    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    // GET id
    @Get(':id') 
    async findOne(@Param('id') id: number): Promise<Product> {
        return this.productsService.findOne(id);
    }

    // PUT
    @Put(':id')
    async update(@Body() createProductDto: CreateProductDto) {
        this.productsService.update(createProductDto);
    }

    // DELETE
    @Delete(':id')
    async delete(@Body() createProductDto: CreateProductDto) {
        this.productsService.delete(createProductDto);
    }
    */
// }
