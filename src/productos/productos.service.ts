import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Productos, ProductosDocument } from 'src/schema/producto.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {    
    constructor(@InjectModel(Productos.name) private productosModule : Model<ProductosDocument>){

    }

    async getAll(){
        return await this.productosModule.find({});
    }
  
}
