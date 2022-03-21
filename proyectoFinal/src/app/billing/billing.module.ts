import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { Routes, RouterModule } from '@angular/router';
import { BillingService } from './services/billing.service';

const routes: Routes = [

  //If the route doesn't exist, redirect to Gastos
  // {
  //   path: '', redirectTo: 'gastos',
  // },
  {
    path: '', component: OutcomeComponent,
  },
  {
    path: 'ingresos', component: IncomeComponent
  },
  {
    path: 'gastos', component: OutcomeComponent,
  }

]

@NgModule({
  declarations: [
    IncomeComponent,
    OutcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BillingService
  ]

})
export class BillingModule { }
