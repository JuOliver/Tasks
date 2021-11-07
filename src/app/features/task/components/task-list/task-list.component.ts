import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/model.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task> = [ 
    { id: 1, description: 'Criar um projeto básico', completed: false, inclusionDate: '2021-07-21' }, 
    { id: 2, description: 'Colocar o lixo para fora até as 19h', completed: true, inclusionDate: '2021-07-22' }, 
    { id: 3, description: 'Fazer o jantar até as 22h', completed: true, inclusionDate: '2021-07-20' }, 
    { id: 4, description: 'Reunião de alinhamento dia 18/07 as 14h', completed: true, inclusionDate: '2021-07-21' }, 
    { id: 5, description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h', completed: false, inclusionDate: '2021-07-19' }, 
    { id: 6, description: 'Criar conteúdo da aula', completed: false, inclusionDate: '2021-07-18' } ];
    
 
//  recebe o valor do array tasks
 filteredTasks = this.tasks;


  constructor() { }

  ngOnInit(): void {
  }

  searchTask(event: any){
    // pega o que o usuario esta digitando
    const value = event.target.value;
    // filtra o que o usuario esta digitando. Caso o search não encontre nada, ele retorna -1
    const tasks = this.tasks.filter((task) => task.description.toUpperCase().search(value.toUpperCase()) > -1);
    this.filteredTasks = tasks;
  }

}
