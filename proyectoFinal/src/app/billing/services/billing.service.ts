import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class BillingService {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      amount: [''],
      date: [''],
      type: []
    });

  }
}
