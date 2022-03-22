import { Injectable } from '@angular/core';
import { Transactions } from './models/Transactions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      name: "Salario"
    },
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
      concept: [, [Validators.required]],
      amount: ['', [Validators.required]],
      date: ['', [Validators.required]],
      type: [, [Validators.required]],
    });
  }

  public addTransaction(trans: Transactions){
    this.transaction.push(trans);
  }

  public getTransactions(type=null){
    if(type){
      return this.transaction.filter( t => t.type === type)
    }else{
      return this.transaction;
    }
  }

  public saveTransaction(){
    console.log(this.form.value);

    if (this.form.valid) {
      const trans: Transactions = {
        concept: this.form.get('concept')?.value,
        amount: this.form.get('amount')?.value,
        date: this.form.get('date')?.value,
        type: this.form.get('type')?.value,
      }

      this.addTransaction(trans);
      this.form.reset();
    }else {
      this.form.markAllAsTouched()
    }



    console.log(this.transaction);
  }

  public getConcepts(){
    return this.concepts;
  }

  public getTypes(){
    return this.transactionType;
  }

}
