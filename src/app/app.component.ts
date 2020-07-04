import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  keyframes
} from '@angular/animations';
import { THIS_EXPR, Statement } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      state('true', style({display: 'flex', opacity: 1})),
      state('false',style({display: 'none', opacity: 0})),
      transition('true => false', [
        animate('0.5s linear'),
      ])
    ]),
    trigger('openLIstToDO', [
      state('true', style({ opacity: 1, transform: 'translateY(0)', height: '100vh'})),
      state('false',style({ opacity: 0, transform: 'translateY(-200%)', height: '50%'})),
      transition('true <=> false', [
        animate('1.6s linear')
      ])
     

    ])
  ]
})
export class AppComponent {
  titleApp = 'Angular toDo app';
  isOpen = true;
  Todo = false;

  toggle() {
    this.isOpen = !this.isOpen;
    this.Todo = true;
  }
  }

