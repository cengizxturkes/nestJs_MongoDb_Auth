import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TokenSchema, UserSchema } from './schemas';
import { AuthDto } from './dto';
import *as bcrypt from "bcrypt"
import { dot } from 'node:test/reporters';
import { error } from 'node:console';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel("Token") private tokenModel: Model<TokenSchema>,
        @InjectModel("User") private userModel: Model<UserSchema>

    ) { }
    async register(dto: AuthDto) {
        const hash = await this.hashData(dto.password)
        const userCheck = await this.userModel.findOne({ email: dto.email })
        if (userCheck) throw new BadRequestException("Kullanıcı Kayıtlı!")

        console.log("dto giriş:" + dto)
        delete dto.password


        const newUser = new this.userModel({
            ...dto,
            password: hash
        })
        await newUser.save().catch((error) => {
            throw new BadRequestException("Kayıt Oluşturulamadı")
        })
        return { result: "Kayıt Eklendi..." }
    }
    async hashData(data: string) {
        return await bcrypt.hash(data, 10)

    }

}
