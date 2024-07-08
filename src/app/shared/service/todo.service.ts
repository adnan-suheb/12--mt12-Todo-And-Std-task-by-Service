import { Injectable } from '@angular/core';
import { UuidService } from './uuid.service';
import { Itodo } from '../interface/todo.interface';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _uuidService: UuidService,
    private _snackBarService:SnackBarService
  ) { }


  // todoArr: Itodo[] = [
  //   {
  //     todoItem: 'HTML',
  //     todoId: this._uuidService.uuid()
  //   },
  //   {
  //     todoItem: 'JavaScript',
  //     todoId: this._uuidService.uuid()
  //   },
  //   {
  //     todoItem: 'Angular',
  //     todoId: this._uuidService.uuid()
  //   }
  // ]

  todoArr: Itodo[]=JSON.parse(localStorage.getItem('todoArr')||'[]')

  fetchAllTodo(): Itodo[] {
    return this.todoArr;
  }

  createNewTodo(data:Itodo){
    this.todoArr.push(data)
    localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
    this._snackBarService.openSnackBar(`New Todo Item ${data.todoItem} Added Successfully!!!`)
  }

  removeTodo(data:Itodo){
    let getIndex = this.todoArr.findIndex(todo=>todo.todoItem===data.todoItem);
    this.todoArr.splice(getIndex,1)
    localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
  }
}
