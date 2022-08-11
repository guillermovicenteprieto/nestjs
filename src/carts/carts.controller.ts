import { Controller, Body, Get, Post, Put, Delete} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from '../dto/create-cart.dto';
import { Cart } from '../interfaces/cart.interface';

@Controller('carts')
export class CartsController {
    constructor(private readonly cartsService: CartsService) {}
    // POST
    @Post()
    async create(@Body() createCartDto: CreateCartDto) {
        this.cartsService.create(createCartDto);
    }
    // GET
    @Get()
    async findAll(): Promise<Cart[]> {
        return this.cartsService.findAll();
    }
    // PUT
    @Put()
    async update(@Body() createCartDto: CreateCartDto) {
        this.cartsService.update(createCartDto);
    }
    // DELETE
    @Delete()
    async delete(@Body() createCartDto: CreateCartDto) {
        this.cartsService.delete(createCartDto);
    }
    
}
