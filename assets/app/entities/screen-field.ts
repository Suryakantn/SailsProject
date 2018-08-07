import { DataValue } from './data-value';

export class ScreenField {

  upload_proc: string;
  compname: string;
  length: string;
  dbfield: string;
  width: string;
  height: string;
  column_no: string;
  cols_spans: string;
  title: string;
  mandatory: string;
  on_change: string;
  color: string;
  format: string;
  list: string;
  order: string;
  ref_combo: string;
  editable: string;
  cmp_group: string;
  default_val: string;
  hint: string;
  style: string;
  value: any;
  unique: string;
  readonly: string = "true";
  combo_search_proce: string;
  combo_filter: string;
  combo_value_field: string;
  combo_disp_field: string;
  datavalues: DataValue[];
  component: any;
  displaytext: string;
  errormessage: string;
  oldvalue: string;

}