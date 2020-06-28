import { Component, OnInit } from '@angular/core'; 
import {ToDoService} from '../shared/to-do.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass']
})
export class ToDoComponent implements OnInit {

  public loading: boolean = true

  constructor(public ToDoService: ToDoService) { }

  ngOnInit(): void {
    this.ToDoService.fetchToDo()
    .pipe(delay(1000))
    .subscribe( () => {
      this.loading = false
    })
  }
  deleteToDo(id: number) {
    this.ToDoService.deleteToDo(id);
  }

}
