import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/mongo")
    ,
    ConfigModule.forRoot({ isGlobal: true }),

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
