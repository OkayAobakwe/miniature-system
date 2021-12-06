import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { todos } from "../mock/todos.mock"
import { v4 } from "uuid"
import { TodoEntity } from "./entity/TodoEntity"
import { TodoDto } from "../todo/dto/todo.dto"
import { toPromise } from 'src/shared/utils';
import { toTodoDto } from 'src/shared/mapper';
import { TodoCreateDto } from './dto/todo.create.dto';

@Injectable()
export class TodoService {

  todos: TodoEntity[] = todos

  async getAllTodo(): Promise<TodoDto[]>{
    return toPromise(this.todos.map(todo => toTodoDto(todo)))
  }

  async getOneTodo(id: string): Promise<TodoDto> {
    const todo = this.todos.find(todo => todo.id === id)

    if(!todo){
      throw new HttpException(`Todo item dne`, HttpStatus.BAD_REQUEST)
    }
    return toPromise(toTodoDto(todo))
  }

  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto>{
    const { name, description } = todoDto

    const todo: TodoEntity = {
      id: v4(),
      name,
      description,
    }
    this.todos.push(todo)
    return toPromise(toTodoDto(todo))
  }
}
