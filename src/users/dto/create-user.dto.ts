import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'
export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name:string
    @IsString()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    @Min(8)
    @Max(16)
    password:string
    @IsNumber()
    @Max(100)
    age:number
}