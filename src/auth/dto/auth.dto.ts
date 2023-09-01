import { IsEmail, IsNotEmpty, IsString, Length, isString } from "class-validator";

export class AuthDto {
    @IsString()
    @IsNotEmpty({ message: "Zorunlu Alan Lütfen Giriniz" })
    name: string;
    @IsString()
    @IsNotEmpty({ message: "Zorunlu Alan Lütfen Giriniz" })
    surname: string;
    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: "Zorunlu Alan Lütfen Giriniz" })
    email: string;
    @IsString()
    @IsNotEmpty()
    @Length(6, 25, { message: "Şifre en az:6 en fazla 25 karakterden oluşmalıdır" })
    password: string
}