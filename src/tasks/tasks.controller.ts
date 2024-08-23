import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TasksController{
    constructor(private tasksService:TasksService ){}
    @Get('/')
    getAllTasks(@Query() query:any){
        console.log(query)
        return this.tasksService.getAllTasks(query)
    }
    @Get('/:id')
    getTask(@Param('id') id:BigInteger){
        return this.tasksService.getTask(id);
    }
    @Post('/')
    createTask(@Body() task:CreateTaskDto){
        return this.tasksService.createTask(task)
    }
    @Put('/:id')
    updateTask(@Body() task:UpdateTaskDto){
        return this.tasksService.updateTask(task)
    }
    @Delete('/:id')
    deleteTask(@Param('id') id:BigInteger){
        return this.tasksService.deleteTask(id)
    }
    @Patch('/:id')
    updateTasksStatus(@Param('id') id:BigInteger){
        return this.tasksService.updateTasksStatus(id)
    }
}