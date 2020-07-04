import { Component, OnInit, HostBinding } from '@angular/core'; 
import {ToDoService} from '../shared/to-do.service';
import { delay } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass'],
  animations: [
    trigger('openClose', [
      state('open', style({
        
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ToDoComponent implements OnInit {

  public loading: boolean = true
  deleteTask = true

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
  delete() {
    this.deleteTask != this.deleteTask;
  }

}
