export interface Product {
    readonly _id: string;

    readonly name: string;

    readonly price: number;

    readonly stock: number;

    readonly description: string;

    readonly image: string;

    readonly category: string;

    readonly createdAt: Date;
    
    readonly updatedAt: Date;
}
