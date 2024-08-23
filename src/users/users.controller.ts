import { Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
 
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get("/hello")
    @UseGuards(AuthGuard)
    getHello(@Query(ValidateUserPipe) query:{name:String, age:number}){
        return `Hello ${query.name}, you are ${query.age} years old`
    }
    @Get('')
    getAllUsers(query:any){
        console.log(query)
        return 'Obteniendo todas las tareas'
    }
    @Get('/:id')
    getUser(@Param('id') id:number){
        return 'Obteniendo una tarea con el id:'+id;
    }
    @Post('')
    createUser(task:CreateUserDto){
        return task
    }
    @Put('/:id')
    updateUser(task:UpdateUserDto){
        return task
    }
    @Delete('/:id')
    deleteUser(id:number){
        return 'Eliminando una usuario'
    }
    @Patch('/:id')
    updateUserAge(id:number){
        return 'Actualizando la edad del usuario: '+id
    }
    
}
