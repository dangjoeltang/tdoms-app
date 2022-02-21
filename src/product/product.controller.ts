import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
  ParseBoolPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { Product as ProductModel } from '@prisma/client';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/:id')
  async getProduct(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.fetchOne({ id: Number(id) });
  }

  @Get('/')
  async getManyProducts(
    @Query('includePricing', new DefaultValuePipe(false), ParseBoolPipe)
    includePricing?: boolean,
  ): Promise<ProductModel[]> {
    const params = {
      include: {
        pricing: includePricing,
      },
    };
    return this.productService.fetchAll(params);
  }

  @Post('/')
  async createProduct(@Body() data: ProductModel): Promise<ProductModel> {
    return this.productService.createProduct(data);
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() data: ProductModel,
  ): Promise<ProductModel> {
    return this.productService.updateProduct({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.deleteProduct({ id: Number(id) });
  }
}
