import { Injectable } from '@nestjs/common';
import { Producto } from '../interfaces/producto.interface';

@Injectable()
export class ProductosService {
    private readonly produto: Producto;
}
