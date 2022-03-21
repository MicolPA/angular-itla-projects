import { TransactionType } from './TransactionType';

export interface Transactions{
  amount:  number;
  date: Date;
  type: TransactionType
}
