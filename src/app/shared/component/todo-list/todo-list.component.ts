import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../interface/todo.interface';
import { DialogService } from '../../service/dialog.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private _todoService:TodoService,
    private _dialogService:DialogService
  ) { }

  todoData:Itodo[]=[]
  ngOnInit(): void {
    this.todoData = this._todoService.fetchAllTodo()
  }

  onRemove(data:Itodo){
    console.log(data);
    
    this._dialogService.openDialog('Confirmation',`Are You Sure, You Want To Delete <strong>${data.todoItem}</strong> ?`)
    .subscribe(result=>{
      if(result){
        this._todoService.removeTodo(data)
      }
    })
  }


}
