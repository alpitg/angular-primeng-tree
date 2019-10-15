import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeComponent } from './tree/tree.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { TreeModule } from 'primeng/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CalendarModule,
    TreeModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [TreeComponent]
})
export class ComponentsModule { }
