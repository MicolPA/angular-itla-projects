import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AppService } from '../app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component : ListComponent
  },
  {
    path: 'registrar', component : CreateComponent
  }
]

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService
  ]
})
export class TransactionModule { }
