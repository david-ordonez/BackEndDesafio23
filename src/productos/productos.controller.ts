import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { AddProductoDto } from './../dto/productos/add-producto.dto';
import { ApiBadRequestResponse, ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';


@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Get()
    @ApiOkResponse({
        description: 'Get productos ok',
        type: AddProductoDto
    })
    @ApiBadRequestResponse({
        description: 'Get productos bad request'
    })
    @ApiNotFoundResponse({
        description: 'Get productos not found'
    })
    findAll(){
        return this.productosService.getAll();
    }
    

    @Post()
    @ApiBody({
        description: 'Create productos',
        type: AddProductoDto
    })
    @ApiOkResponse({
        description: 'Create productos ok',
        type: AddProductoDto,
    })
    @ApiBadRequestResponse({
        description: 'Create productos bad request'
    })
    @ApiNotFoundResponse({
        description: 'Create productos not found'
    })
    async create(@Body() addProductoDto: AddProductoDto) {
        await this.productosService.create(addProductoDto);
    }
}
