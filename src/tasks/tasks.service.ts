import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    getAllTasks(query:any){
        console.log(query)
        return 'Obteniendo todas las tareas'
    }
    getTask( id:BigInteger){
        return 'Obteniendo una tarea con el id:'+id;
    }
    createTask(task:CreateTaskDto){
        return task
    }
    updateTask(task:UpdateTaskDto){
        return task
    }
    deleteTask(id:BigInteger){
        return 'Eliminando una tarea'
    }
    updateTasksStatus(id:BigInteger){
        return 'Actualizando el status de la tarea: '+id
    }
}
