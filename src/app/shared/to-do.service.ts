import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ToDo {
  completed: boolean;
  title: string;
  id: number;
}

@Injectable({providedIn: 'root'})
export class ToDoService {
  public toDo: ToDo[] = []
  constructor(private http: HttpClient) {}

  fetchToDo(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=0')
      .pipe(tap(toDo => this.toDo = toDo)) 
  }
  deleteToDo(id: number) {
    this.toDo = this.toDo.filter(t => t.id !== id);
  }
  addTodo(toDo: ToDo) {
    this.toDo.push(toDo)
  }
}