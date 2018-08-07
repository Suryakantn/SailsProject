import { DataValue } from './data-value';

export class SearchParam {

  compname: string;
  length: string;
  dbfield: string;
  width: string;
  displaytext: string;
  height: string;
  column_no?: any;
  cols_spans?: any;
  title: string;
  mandatory?: any;
  on_change?: any;
  color?: any;
  format?: any;
  list: string;
  order: string;
  ref_combo?: any;
  editable?: any;
  cmp_group?: any;
  default_val: string;
  hint?: any;
  style?: any;
  value?: any;
  combo_search_proce: string;
  combo_filter: string;
  combo_value_field: string;
  combo_disp_field: string;
  component: any;
  datavalues: DataValue[];
  
}