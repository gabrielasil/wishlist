import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfiguration } from './config/typeorm.config';
import { CategoryModule } from './modules/category/category.module';
import { ItemModule } from './modules/item/item.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfiguration,
    }),
    CategoryModule,
    ItemModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
