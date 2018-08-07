import { Component, OnInit, Input } from '@angular/core';

import { DataRow } from '../entities/data-row';
import { SearchParam } from '../entities/search-param';
import { MainService } from '../services/main-service';
import { TableOption } from '../entities/table-option';
import { Condition } from '../entities/condition';
import { Col } from '../entities/col';

@Component({
  selector: 'app-model-search-page',
  templateUrl: './model-search-page.component.html',
  styleUrls: ['./model-search-page.component.css']
})

export class ModelSearchPageComponent {

  @Input('searchobj') searchobj: any;
  @Input('listobj') listobj: any;
  @Input('datarows') datarows: DataRow[];

  searchtitle: string;
  searchfields: SearchParam[];
  orderedby: string = "ASC";

  constructor(private mainService: MainService) {

  }

  ngOnInit() {
    this.searchtitle = this.searchobj.title;
    this.searchfields = this.searchobj.fields;
    this.onSearchClick();
  }

  onSearchClick() {
    let tableoption: TableOption = new TableOption();
    let conditions: Condition[] = [];
    let cols: string[] = [];

    for (let listparams of this.listobj.listfields) {
      if (listparams.field != "") {
        cols.push(listparams.field);
      }
    }

    this.searchfields.forEach(element => {
      if (element.value != null) {
        if (element.value != "") {
          if (element.compname == 'autocomplete') {
            conditions.push(new Condition(element.dbfield, element.value[element.combo_value_field]));
          }
          else if (element.compname == 'datebox') {
            conditions.push(new Condition(element.dbfield, element.value + "%"));
          }
          else {
            conditions.push(new Condition(element.dbfield, element.value));
          }
        }
      }
    });

    tableoption.orderby = this.listobj.listfields[0].field;
    tableoption.ordertype = this.orderedby;
    tableoption.conditions = conditions;
    tableoption.tablecols = cols;
    tableoption.keyid = this.listobj.key;
    tableoption.limit = null;

    this.mainService.getTableData('hamse', this.searchobj.proc_name, tableoption).subscribe(
      response => {
        console.log("table search response === ", response);

        let datarow: DataRow[] = response.datarows;

        if (datarow.length == 0) {
          this.datarows.forEach(element => {
            let index: number = this.datarows.indexOf(element);
            if (index !== -1) {
              this.datarows.splice(index, this.datarows.length);
            }
          });
        }
        else {
          this.datarows.forEach(element => {
            let index: number = this.datarows.indexOf(element);
            if (index !== -1) {
              this.datarows.splice(index, this.datarows.length);
            }
          });
          for (let data of datarow) {
            data.status = false;
            let d: DataRow = new DataRow();
            let c: Col[] = [];

            for (let col of data.cols) {
              c.push(col);
            }
            d.cols = c;
            d.keyvalue = data.keyvalue;
            d.status = true;
            this.datarows.push(d);
          }
        }
      });
  }

  onClearClick() {
    this.searchfields.forEach(element => {
      element.value = null;
      element.displaytext = null;
    });
  }

}
