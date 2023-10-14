import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input()
  todo: Todo = new Todo();
  @Input()
  index: number = 0;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('onClick has been triggered: DELETEs');
  }

  onCheckBoxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
}
