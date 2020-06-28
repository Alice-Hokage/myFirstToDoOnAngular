import { Component, OnInit } from '@angular/core';
import { ToDo, ToDoService } from '../shared/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.sass']
})
export class ToDoFormComponent implements OnInit {

  title: string = '';
  placeholter = 'Enter you task';
  constructor(private ToDoService: ToDoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const toDo: ToDo = {
      title: this.title,
      completed: false,
      id: Date.now()
    }
    if(this.title.trim()) {
      this.ToDoService.addTodo(toDo)
      this.placeholter = 'Enter you task'
    } else {
      this.placeholter = 'Enter a valid task'
    }
    this.title = ''
    
  }
  
  
}
