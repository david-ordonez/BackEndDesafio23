import { IsNotEmpty, Max, Min } from 'class-validator';

export class AddProductoDto{
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @Max(9999)
    @Min(1)
    precio: number;

    @IsNotEmpty()
    foto: string;
}