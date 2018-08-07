import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as $ from "jquery";

import { DataRow } from '../entities/data-row';
import { Listview } from '../entities/list-view';
import { TableOption } from '../entities/table-option';
import { Condition } from '../entities/condition';
import { MainService } from '../services/main-service';
import { ScreenField } from '../entities/screen-field';

@Component({
  selector: 'app-model-list-page',
  templateUrl: './model-list-page.component.html',
  styleUrls: ['./model-list-page.component.css']
})

export class ModelListPageComponent {

  @Input('listobj') listobj: any;
  @Input('screenobj') screenobj: any;
  @Input('datarows') datarows: DataRow[];

  listfields: Listview[];

  itemsPerPage: number = 10;
  isAsc: boolean = true;
  temp_index: number = 0;
  filterJson: any = {};

  @ViewChild('deleteModal') public deleteModal: ModalDirective;

  constructor(private mainService: MainService) {

  }

  ngOnInit() {
    this.listfields = this.listobj.listfields;

    // console.log(document.getElementById("list-table").offsetWidth, " ===> ", document.getElementById("list-table").scrollWidth + "px");
    // document.getElementById("list-table-dummy").style.width = (document.getElementById("table-scroll").scrollWidth + "px");
  }

  @Output() showscreenpage = new EventEmitter<string>();

  showForm(screenstatus: string) {
    this.showscreenpage.emit(screenstatus);

    if (screenstatus == 'view') {
      this.disableData(this.screenobj.fields);
    }
    else {
      this.enableData(this.screenobj.fields);
    }
  }

  // full filter

  fullFilter() {
    let listfilter = (<HTMLInputElement>window.document.getElementById("fullfiltervar"));

    if (listfilter.value != "") {
      this.datarows.forEach(element => {
        let matchcols: number = 0;
        element.cols.forEach(element1 => {
          if (element1.value.toLowerCase().indexOf(listfilter.value.toLowerCase()) > -1) {
            matchcols++;
          }
        });
        if (matchcols != 0) {
          element.status = true;
        }
        else {
          element.status = false;
        }
      });
    }
    else {
      this.datarows.forEach(element => {
        element.status = true;
      });
    }
  }

  // individual filtering

  // filter(arr: any, criteria: any) {
  //   this.temptabledata = arr.filter((item: any) => {
  //     return Object.keys(criteria).every((c) => {
  //       return item[c].toLowerCase().includes(criteria[c].toLowerCase());
  //     });
  //   });
  // }

  // onefilter(colname: string, event: any) {
  //   let val = event.target.value;

  //   if (val != '') {
  //     this.filterJson[colname] = val;
  //   }
  //   else {
  //     delete this.filterJson[colname];
  //   }

  //   this.filter(this.tabledata, this.filterJson);
  // }

  onefilter() {

    let filterCols: any[] = [];

    this.datarows.forEach(element => {
      element.status = true;
    });

    this.listfields.forEach(columns => {

      let listfilter = (<HTMLInputElement>window.document.getElementById("onefiltervar_" + columns.order));

      if (listfilter.value != "") {
        filterCols.push(columns);
      }

    });

    filterCols.forEach(element => {
      this.oneFilter1(element);
    });

  }

  oneFilter1(column: any) {

    let listfilter = (<HTMLInputElement>window.document.getElementById("onefiltervar_" + column.order));

    this.datarows.forEach(element => {
      let matchcols: number = 0;
      element.cols.forEach(element1 => {
        if (element.status && (element1.fieldName == column.field) && (element1.value.toLowerCase().indexOf(listfilter.value.toLowerCase()) > -1)) {
          matchcols++;
        }
      });
      if (matchcols != 0) {
        element.status = true;
      }
      else {
        element.status = false;
      }
    });

  }

  // sorting

  sortColumn(column: any, order: number) {

    if (this.temp_index == order) {

    }
    else {
      this.isAsc = true;
      this.temp_index = order;
    }

    if (this.isAsc) {
      this.datarows.sort((a, b) => {
        return (a.cols[order].value.toLowerCase() > b.cols[order].value.toLowerCase()) ? 1 : ((b.cols[order].value.toLowerCase() > a.cols[order].value.toLowerCase()) ? -1 : 0);
      });
      // for number
      // return (a[col] - b[col]);
      this.isAsc = false;
    }
    else {
      this.datarows.sort((b, a) => {
        return (a.cols[order].value.toLowerCase() > b.cols[order].value.toLowerCase()) ? 1 : ((b.cols[order].value.toLowerCase() > a.cols[order].value.toLowerCase()) ? -1 : 0);
      });
      // for number
      // return (a[col] - b[col]);
      this.isAsc = true;
    }
  }

  // edit record

  onEditClick(row: any, keyvalue: string) {
    // event.stopPropagation();

    // console.log("row === ", row);
    // console.log("keyvalue === ", keyvalue);
    // console.log("screen === ", this.screenobj);

    this.clearData(this.screenobj.fields);

    this.screenobj.key_value = keyvalue;
    let cols: string[] = [];

    let tableoption: TableOption = new TableOption();
    let conditions: Condition[] = [];
    conditions.push(new Condition(this.screenobj.key_id, keyvalue));
    tableoption.conditions = conditions;

    for (let screenparam of this.screenobj.fields) {
      if (screenparam.dbfield != "") {
        cols.push(screenparam.dbfield);
      }
    }
    tableoption.tablecols = cols;

    this.mainService.getTableData('hamse', this.screenobj.table, tableoption).subscribe(
      response => {
        console.log("onEditClick response === ", response);
        let datarow: DataRow[] = response.datarows;

        for (let dt of datarow) {
          // this.populateScreen(dt, this.screenobj);

          for (let col of dt.cols) {
            for (let screenfld of this.screenobj.fields) {

              if (col.fieldName == screenfld.dbfield) {
                if (screenfld.compname == 'checkbox') {
                  screenfld.value = (col.value == "1" ? true : false);
                }
                else {
                  screenfld.value = col.value;
                }
                break;
              }
            }
          }
        }
      });
  }

  // delete record

  openDeleteModal() {
    this.deleteModal.show();
  }

  deleteRecord() {
    this.closeDeleteModal();
  }

  closeDeleteModal() {
    this.deleteModal.hide();
  }

  // clear data

  clearData(screenfields: ScreenField[]) {
    for (let screenfield of screenfields) {
      screenfield.errormessage = "";

      if (screenfield.compname == 'checkbox') {
        screenfield.value = false;
      }
      else {
        screenfield.value = "";
      }
    }
  }

  disableData(screenfields: ScreenField[]) {
    for (let screenfield of screenfields) {
      screenfield['disableField'] = "1";
    }
  }

  enableData(screenfields: ScreenField[]) {
    for (let screenfield of screenfields) {
      screenfield['disableField'] = "0";
    }
  }

}