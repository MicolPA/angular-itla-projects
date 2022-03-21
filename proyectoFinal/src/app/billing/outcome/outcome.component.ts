import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { BillingService } from '../services/billing.service';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {

  constructor(private AppService: AppService, private BillingService: BillingService) { }

  ngOnInit(): void {
  }

}
