import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/model.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  tarefa?: Task;

  constructor() { }

  ngOnInit(): void {
  }

  atualizarStatus(){
    if(this.tarefa){
      // INVERSAO LOGICA
      this.tarefa.completed = !this.tarefa?.completed; 
    }
  }

}
