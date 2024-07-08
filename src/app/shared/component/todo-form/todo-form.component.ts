import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _uuidService: UuidService,
    private _todoService: TodoService
  ) { }

  @ViewChild('todoForm') todoForm!: NgForm
  ngOnInit(): void {
  }

  onTodoSubmit() {
    if (this.todoForm.valid) {
      let newTodo = { ...this.todoForm.value, tooId: this._uuidService.uuid() }
      this._todoService.createNewTodo(newTodo);
      this.todoForm.resetForm();
    }

  }

  onClear(){
    this.todoForm.reset();
  }
}
