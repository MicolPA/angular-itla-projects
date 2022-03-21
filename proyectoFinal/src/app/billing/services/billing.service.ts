import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionConcept } from '../../models/TransactionConcept';
import { TransactionType } from '../../models/TransactionType';

@Injectable()
export class BillingService {

  public form: FormGroup;
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

  public saveTransaction(type: TransactionType){
    this.form.get('type')?.setValue(type);
    console.log(this.form);
  }

  public getConcepts(){
    return this.concepts;
  }
}
