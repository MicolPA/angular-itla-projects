import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { TransactionConcept } from '../../models/TransactionConcept';
import { TransactionType } from '../../models/TransactionType';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public concepts: TransactionConcept[] = [];
  public transactionType: TransactionType[] = [];
  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.concepts = this.appService.getConcepts();
    this.transactionType = this.appService.getTypes();
  }

  save(){
    this.appService.saveTransaction();
  }
}
