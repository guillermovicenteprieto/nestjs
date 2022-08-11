import { Injectable } from '@nestjs/common';

import { Cart } from '../interfaces/cart.interface';
import { Product } from '../interfaces/product.interface';


@Injectable()
export class CartsService {
    private readonly carts: Cart[] = [];
    create(cart: Cart) {
        this.carts.push(cart);
    }

    findAll(): Cart[] {
        return this.carts;
    }

    update(cart: Cart) {
        this.carts.forEach((item, index) => {
            if (item.id === cart.id) {
                this.carts[index] = cart;
            }
        }
        );
    }

    delete(cart: Cart) {
        this.carts.forEach((item, index) => {
            if (item.id === cart.id) {
                this.carts.splice(index, 1);
            }
        }
        );
    }
    
}
