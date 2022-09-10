import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Productos, ProductosSchema } from 'src/schema/producto.schema';

@Module({
  imports: [ 
    MongooseModule.forFeature([
      {
        name: Productos.name,
        schema: ProductosSchema
      }
    ])
  ],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
