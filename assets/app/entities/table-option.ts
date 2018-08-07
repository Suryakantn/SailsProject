import { Condition } from './condition';

export class TableOption {

  conditions: Condition[];
  tablecols: string[];
  additionslfilter: string;
  keyid: string;
  limit: number;
  offset: number;
  orderby: string;
  ordertype: string;
  
}