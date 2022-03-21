import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { BillingService } from '../services/billing.service';
import { TransactionType } from '../../models/TransactionType';
import { TransactionConcept } from 'src/app/models/TransactionConcept';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {

  public concepts: TransactionConcept[] = [];
  constructor(private AppService: AppService, public billingService: BillingService) { }

  ngOnInit(): void {
    this.concepts = this.billingService.getConcepts();
  }

  save(){
    this.billingService.saveTransaction(TransactionType.GASTO);
  }

}
