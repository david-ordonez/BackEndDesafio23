import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { AddProductoDto } from './../dto/productos/add-producto.dto';
import { ApiBadRequestResponse, ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UpdateProductoDto } from '../dto/productos/update-producto.dto';


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
    async findAll(){
        return this.productosService.getAll();
    }

    @Get(':id')
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
    async findById(@Param('id') id : string){
        const producto = this.productosService.getById(id);
        return producto
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
        const producto = await this.productosService.create(addProductoDto);
        return producto;
    }

    @ApiParam({ name: 'id', type: 'string'})
    @Patch()
    @ApiBody({
        description: 'Update productos',
        type: AddProductoDto
    })
    @ApiOkResponse({
        description: 'Update productos ok',
        type: AddProductoDto,
    })
    @ApiBadRequestResponse({
        description: 'Update productos bad request'
    })
    @ApiNotFoundResponse({
        description: 'Update productos not found'
    })
    async update(@Body() updateProductoDto: UpdateProductoDto){
        const producto = await this.productosService.update(updateProductoDto);
        return producto;
    }

    
  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string'})
  @ApiBody({
      description: 'Update productos',
      type: AddProductoDto
  })
  @ApiOkResponse({
      description: 'Update productos ok',
      type: AddProductoDto,
  })
  @ApiBadRequestResponse({
      description: 'Update productos bad request'
  })
  @ApiNotFoundResponse({
      description: 'Update productos not found'
  })
  remove(@Param('id') id: string) {
    return this.productosService.delete(id);
  }
}
