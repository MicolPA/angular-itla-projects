import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'transacciones',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionModule)
  },
  {
    path: 'importes',
    loadChildren: () => import('./billing/billing.module').then( m => m.BillingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
