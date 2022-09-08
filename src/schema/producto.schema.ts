import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductosDocument = Productos & Document;

@Schema()
export class Productos {
    @Prop()
    nombre: string;
    
    @Prop()
    precio: number;
    
    @Prop()
    foto: string;
}

export const ProductosSchema = SchemaFactory.createForClass(Productos);