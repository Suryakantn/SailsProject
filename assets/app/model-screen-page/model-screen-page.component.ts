import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScreenField } from '../entities/screen-field';

@Component({
  selector: 'app-model-screen-page',
  templateUrl: './model-screen-page.component.html',
  styleUrls: ['./model-screen-page.component.css']
})

export class ModelScreenPageComponent {

  @Input('screenobj') screenobj: any;
  @Input('screenstatus') screenstatus: string;

  screentitle: string;
  screenfields: any;

  constructor() {

  }

  ngOnInit() {
    this.screentitle = this.screenobj.name;
    this.screenfields = this.screenobj.fields;
  }

  @Output() showlistpage = new EventEmitter<string>();

  showList() {
    this.showlistpage.emit();
  }

  onUpsertClick() {

  }

  onResetClick() {
    this.clearData(this.screenobj.fields);
  }

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

  check() {
    console.log(this.screenobj.fields);
    
    this.screenobj.fields.forEach((element: any) => {
      console.log(element.title, " === ", element.value);
    });
  }


}
