import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Todo list API Documentation')
  .setDescription('')
  .setVersion('1.0')
  .addServer('http://localhost:3000')
  .build();

export const swaggerCustomOptions: SwaggerCustomOptions = {
  yamlDocumentUrl: '../api_docs/todolist.yaml',
  explorer: true,
};
