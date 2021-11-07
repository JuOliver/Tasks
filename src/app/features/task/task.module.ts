import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskComponent } from './components/task/task.component';
import { GreenDirective } from 'src/app/shared/directives/green.directive';
import { TaskPageComponent } from './pages/task-page/task-page.component';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    TaskListComponent
  ]
})
export class TaskModule { }
