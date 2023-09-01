import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Token, TokenSchema, UserSchema } from './schemas';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: "User",
      schema: UserSchema,
    },
    {
      name: "Token",
      schema: TokenSchema
    }
    ]
    ),
    JwtModule.registerAsync({
      useFactory: () => ({
        secrets: process.env.JWT_SECRET_KEY,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES_IN
        }
      })
    })
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
