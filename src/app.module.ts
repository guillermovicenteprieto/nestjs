import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { MongooseModule } from '@nestjs/mongoose';
//'mongodb://127.0.0.1/nest'
//const mongoUri = process.env.MONGODB_URI;

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://guillermoVicentePrieto:ZE0LvGYbvfbCVCnm@cluster0.igk5i.mongodb.net/TestNest'), ProductsModule, CartsModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
