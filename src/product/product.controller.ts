import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Product as ProductModel } from '@prisma/client';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('product/:id')
  async getProduct(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.fetchOne({ id: Number(id) });
  }

  @Get('product')
  async getAllProducts(): Promise<ProductModel[]> {
    return this.productService.fetchAll({});
  }

  @Post('product')
  async createProduct(@Body() data: ProductModel): Promise<ProductModel> {
    return this.productService.createProduct(data);
  }

  @Put('product/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() data: ProductModel,
  ): Promise<ProductModel> {
    return this.productService.updateProduct({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.deleteProduct({ id: Number(id) });
  }
}
