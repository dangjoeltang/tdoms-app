import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Contact as ContactModel } from '@prisma/client';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/:id')
  async getContact(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.fetchOne({ id: Number(id) });
  }

  @Get('/')
  async getAllContacts(): Promise<ContactModel[]> {
    return this.contactService.fetchAll({});
  }

  @Post('/')
  async createContact(@Body() data: ContactModel): Promise<ContactModel> {
    return this.contactService.createContact(data);
  }

  @Put('/:id')
  async updateContact(
    @Param('id') id: string,
    @Body() data: ContactModel,
  ): Promise<ContactModel> {
    return this.contactService.updateContact({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('/:id')
  async deleteContact(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.deleteContact({ id: Number(id) });
  }
}
