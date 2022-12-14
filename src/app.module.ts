import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MensajesModule } from './mensajes/mensajes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductosModule, MensajesModule, MongooseModule.forRoot('mongodb+srv://dordonez:00Gd801011_@cluster0.thmqy.mongodb.net/ecommerce')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
