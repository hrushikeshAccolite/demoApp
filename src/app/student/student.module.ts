import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';


@NgModule({
  declarations: [
    ListViewComponent,
    DetailViewComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
