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
import { ClientService } from './client.service';
import { Client as ClientModel } from '@prisma/client';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('/:id')
  async getClient(@Param('id') id: string): Promise<ClientModel> {
    return this.clientService.fetchOne({ id: Number(id) });
  }

  @Get('/')
  async getAllClients(
    @Query('referenceOnly', new DefaultValuePipe(false), ParseBoolPipe)
    referenceOnly?: boolean,
  ): Promise<ClientModel[]> {
    const params = {
      select: {
        id: true,
        name: true,
        email: true,
        accountNumber: true,
      },
    };
    return this.clientService.fetchAll({});
  }

  @Post('/')
  async createClient(@Body() data: ClientModel): Promise<ClientModel> {
    return this.clientService.createClient(data);
  }

  @Put('/:id')
  async updateClient(
    @Param('id') id: string,
    @Body() data: ClientModel,
  ): Promise<ClientModel> {
    return this.clientService.updateClient({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: string): Promise<ClientModel> {
    return this.clientService.deleteClient({ id: Number(id) });
  }
}
