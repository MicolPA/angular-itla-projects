import { TransactionConcept } from './TransactionConcept';
import { TransactionType } from './TransactionType';

export interface Transactions{
  amount:  number;
  date: Date;
  concept: TransactionConcept
  type: TransactionType
}
