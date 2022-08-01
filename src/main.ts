import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from 'nestjs-prisma';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn', 'log'],
  });
  const { httpAdapter } = app.get(HttpAdapterHost);
  const prismaService: PrismaService = app.get(PrismaService);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.setGlobalPrefix('api');
  prismaService.enableShutdownHooks(app);
  await app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log('Server is running.');
  });
}
bootstrap();
