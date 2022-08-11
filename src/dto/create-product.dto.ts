import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {

    @ApiProperty()
    readonly _id: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly price: number;
    
    @ApiProperty()
    readonly stock: number;
    
    @ApiProperty()
    readonly description: string;
    
    @ApiProperty()
    readonly image: string;
    
    @ApiProperty()
    readonly category: string;

    @ApiProperty()
    readonly createdAt: Date;

    @ApiProperty()
    readonly updatedAt: Date;
}