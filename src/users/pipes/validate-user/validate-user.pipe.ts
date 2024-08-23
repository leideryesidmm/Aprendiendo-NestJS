import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ageNumber=parseInt(value.age.toString(),10);
    console.log(value)
    if(isNaN(ageNumber)){
      throw new HttpException('La edad debe ser un numero',HttpStatus.BAD_REQUEST)
    } 
    return {...value,age:ageNumber};
  }
}
