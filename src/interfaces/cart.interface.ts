import { Product } from "./product.interface";

export interface Cart {
    readonly id: number;

    readonly name: string;

    readonly price: number;

    readonly date: Date;

    readonly products: Product[];

    readonly createdAt: Date;

    readonly updatedAt: Date;
}
