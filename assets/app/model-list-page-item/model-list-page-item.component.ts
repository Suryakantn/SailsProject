import { Component, OnInit, Input } from '@angular/core';
import { DataRow } from '../entities/data-row';
import { Listview } from '../entities/list-view';

@Component({
  selector: 'app-model-list-page-item',
  templateUrl: './model-list-page-item.component.html',
  styleUrls: ['./model-list-page-item.component.css']
})
export class ModelListPageItemComponent {

  @Input('data') data: DataRow;
  @Input('listfields') listfields: Listview[];
  @Input('fieldname') fieldname: string;

  datavalue: string;
  comptype: string;

  constructor() {

  }

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.listfields.forEach(element => {
      if (element.field == this.fieldname) {
        this.comptype = element.comp_type;
        // console.log("comptype === ", this.comptype);
      }
    });

    this.data.cols.forEach(element => {
      if (element.fieldName == this.fieldname) {
        this.datavalue = element.value;
      }
    });
  }

}
