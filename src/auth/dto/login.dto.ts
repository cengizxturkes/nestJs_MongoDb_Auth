import { IsNotEmpty, IsString, Length, isString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty({ message: "Zorunlu Alan Lütfen Giriniz" })
    email: string;
    @IsString()
    @IsNotEmpty()
    @Length(6, 25, { message: "Şifre en az:6 en fazla 25 karakterden oluşmalıdır" })
    password: string
}