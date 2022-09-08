import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MensajesModule } from './mensajes/mensajes.module';

@Module({
  imports: [ProductosModule, MensajesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
