import { IsNotEmpty, Max, Min } from 'class-validator';

export class UpdateProductoDto{
    @IsNotEmpty()
    _id: string;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @Max(9999)
    @Min(1)
    precio: number;

    @IsNotEmpty()
    foto: string;
}