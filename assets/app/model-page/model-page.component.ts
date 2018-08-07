import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../services/main-service';
import { Condition } from '../entities/condition';
import { DataRow } from '../entities/data-row';
import { ScreenField } from '../entities/screen-field';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.css'],
  providers: [MainService]
})

export class ModelPageComponent {

  modelName: any;
  listbool: boolean = true;

  screenstatus: string;
  pagetitle: string;
  // searchobj: any = {};
  // listobj: any = {};
  // screenobj: any = {};
  searchobj: any;
  listobj: any;
  screenobj: any;
  listfields: string;
  datarows: DataRow[] = [];

  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService) {
    this.modelName = this.activatedRoute.snapshot.params['name'];
  }

  ngOnInit() {
    this.getpageDetails();
  }

  getpageDetails() {
    let condition: Condition[] = [];

    this.mainService.getPageDetails('hamse', this.modelName, condition).subscribe(
      response => {
        // console.log("getPageDetails response === ", response);

        this.pagetitle = response.title
        this.searchobj = response.search;
        this.listobj = response.list;
        this.screenobj = response.screen;
        this.listfields = response.list.listfields;
      });
  }

  showList() {
    this.listbool = true;
  }

  showForm(screenstatus: string) {
    this.listbool = false;
    console.log("screenstatus === ", screenstatus);
    this.screenstatus = screenstatus;

    if (screenstatus == 'add') {
      this.screenobj.key_value = "";

      this.clearData(this.screenobj.fields);
      this.screenobj.childscreen.forEach((element: any) => {
        this.clearData(element.fields);
        element.griddata = [];
      });
      // this.setDefaults(this.screenobj.fields);
    }
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

  setDefaults(screenfields: ScreenField[]) {
    for (let screenfield of screenfields) {
      screenfield.value = screenfield.default_val;
    }
  }


}
