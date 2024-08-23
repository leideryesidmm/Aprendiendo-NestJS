import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    getAllUsers(query:any){
        console.log(query)
        return 'Obteniendo todas las tareas'
    }
    getUser( id:BigInteger){
        return 'Obteniendo una tarea con el id:'+id;
    }
    createUser(task:CreateUserDto){
        return task
    }
    updateUser(task:UpdateUserDto){
        return task
    }
    deleteUser(id:BigInteger){
        return 'Eliminando una usuario'
    }
    updateUserAge(id:BigInteger){
        return 'Actualizando la edad del usuario: '+id
    }
}
