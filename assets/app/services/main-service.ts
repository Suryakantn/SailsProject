import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';

import { Condition } from '../entities/condition';
import { PageInput } from '../entities/page-input';
import { TableOption } from '../entities/table-option';

@Injectable()

export class MainService {

  pageInput: PageInput;

  projectpath: string = "https://jpplhamseadmin.vernost.in/hamsecore";
  // projectpath: string = "https://hamseadminuat.vernost.in/hamsecore";
  // projectpath: string = "http://localhost:8080/hamsecore";

  constructor(private http: Http) {

  }

  getPageDetails(project: any, functionalitycode: any, params: Condition[]) {
    this.pageInput = new PageInput();
    this.pageInput.applicationid = project;
    this.pageInput.functionalitycode = functionalitycode;

    if (params == null) {
      this.pageInput.conditions = [];
    }
    else {
      this.pageInput.conditions = params;
    }

    var url = this.projectpath + "/getpage";
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    let abc = this.http.post(url, this.pageInput, { headers: headers })
      .map(res => res.json());
    return abc;
  }

  getTableData(project: any, tablename: any, tableoptions: TableOption) {
    var url = this.projectpath + "/gettabledata/" + project + "/" + tablename;
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    console.log("tableoptions === ", JSON.stringify(tableoptions));

    let abc = this.http.post(url, tableoptions, { headers: headers })
      .map(res => res.json());
    return abc;
  }

  getTableValues(project: any, tablename: any, tableoptions: TableOption) {
    var url = this.projectpath + "/gettablevalues/" + project + "/" + tablename;
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    console.log("tableoptions === ", JSON.stringify(tableoptions));

    let abc = this.http.post(url, tableoptions, { headers: headers })
      .map(res => res.json());
    return abc;
  }

  uploadFile(fileToUpload: File) {
    var file: File = fileToUpload;
    var formData: FormData = new FormData();

    console.log("file uploading === ", file)
    var url = 'http://localhost:8084/uploadFile';

    formData.append('image', file, file.name);

    let abc = this.http.post(url, formData)
      .pipe(map(res => res.json()));
    return abc;
  }

  // getFile() {
  //   let abc = this.http.get('http://localhost:8084/getUploadedFiles')
  //     .pipe(map(res => res.json()));
  //   return abc;
  // }

}