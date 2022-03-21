import { Injectable } from '@angular/core';
import { Transactions } from './models/Transactions';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private transaction: Transactions[] = [];
  constructor() { }

  public addTransaction(tran: Transactions){
    this.transaction.push(tran);
  }

  public getTransactions(){
    return this.transaction;
  }
}
