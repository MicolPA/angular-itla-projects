import { Injectable } from '@angular/core';
import { Transactions } from './models/Transactions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransactionConcept } from './models/TransactionConcept';
import { TransactionType } from './models/TransactionType';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private transaction: Transactions[] = [];
  public form: FormGroup;
  public transactionType: TransactionType[] = [
    {
      name: "Gasto"
    },
    {
      name: "Ingreso"
    },
  ];
  public concepts: TransactionConcept[] = [
    {
      name: "Comida"
    },
    {
      name: "Universidad"
    },
    {
      name: "Transporte"
    }
  ]
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      concept: [''],
      amount: [''],
      date: [''],
      type: []
    });
  }

  public addTransaction(trans: Transactions){
    this.transaction.push(trans);
  }

  public getTransactions(){
    return this.transaction;
  }

  public saveTransaction(){
    // this.form.get('type')?.setValue(type);
    console.log(this.form.value);

    const trans: Transactions = {
      concept: this.form.get('concept')?.value,
      amount: this.form.get('amount')?.value,
      date: this.form.get('date')?.value,
      type: this.form.get('type')?.value,
    }
    this.addTransaction(trans);
    console.log(this.transaction);
  }

  public getConcepts(){
    return this.concepts;
  }

  public getTypes(){
    return this.transactionType;
  }

}
