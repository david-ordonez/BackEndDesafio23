import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Productos, ProductosDocument } from '../schema/producto.schema';
import { Model } from 'mongoose';
import { AddProductoDto } from './../dto/productos/add-producto.dto';
import { UpdateProductoDto } from './../dto/productos/update-producto.dto';

@Injectable()
export class ProductosService {    
    constructor(@InjectModel(Productos.name) private productosModule : Model<ProductosDocument>){

    }

    async getAll(){
        return await this.productosModule.find({});
    }

    async getById(id: string){
        const producto = await this.productosModule.find({_id: id})
        return producto
    }

    async create(producto : AddProductoDto){
        const productoCreated = await this.productosModule.create(AddProductoDto);
        return productoCreated;
    }

    async update(producto : UpdateProductoDto){
        const productoUpdate = await this.productosModule.findByIdAndUpdate(producto._id, producto);
        return productoUpdate;
    }

    async delete(id: string){
        await this.productosModule.deleteOne({_id: id});
    }
  
}
