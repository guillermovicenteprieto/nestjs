import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/interfaces/product.interface';

export class CreateCartDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;
  
  @ApiProperty()
  readonly price: number;
  
  @ApiProperty()
  readonly date: Date;
  
  @ApiProperty()
  readonly products: Product[];
  
  @ApiProperty()
  readonly createdAt: Date;
  
  @ApiProperty()
  readonly updatedAt: Date;
}
