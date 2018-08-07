import { Component } from '@angular/core';

export class DummyJsonComponent {

  json: any;

  constructor() {



    // this.json = {
    //   "userInfo": {
    //     "usercode": "hadmin",
    //     "membershipid": "",
    //     "projectcode": null,
    //     "profilepicture": "",
    //     "usrfirstname": "Rahul",
    //     "usrlastname": "Adhav",
    //     "usrprefname": null,
    //     "usremailid": "rahul.adhav@vernost.in",
    //     "usrmobile": null,
    //     "usrcompany": "",
    //     "usrdesignation": "",
    //     "usrdepartment": "",
    //     "projectdetail": null,
    //     "sessionid": "dba21dfec4fb81d5f1fe4c2c6e15"
    //   },
    //   "projectInfo": {
    //     "jppl_no": "",
    //     "projectcode": "HAMSE",
    //     "projectname": "Hotel Affiliate Meta Search Engine",
    //     "roledetail": [
    //       {
    //         "role_desc": "Hamse Admin",
    //         "roleid": 3,
    //         "rolename": "HAMSEADMIN"
    //       }
    //     ],
    //     "funname": [
    //       {
    //         "functionid": "",
    //         "functionname": "Masters",
    //         "pagecode": "",
    //         "icon": "glyphicon-list",
    //         "functionality_access": [
    //           {
    //             "functionalityid": "1",
    //             "functionalityname": "View"
    //           }
    //         ],
    //         "sub_functionality": [
    //           {
    //             "functionid": "37",
    //             "functionname": "General Master Types",
    //             "pagecode": "HMSGENMASTERTYPE",
    //             "icon": "glyphicon-tasks",
    //             "functionality_access": [
    //               {
    //                 "functionalityid": "1",
    //                 "functionalityname": "View"
    //               },
    //               {
    //                 "functionalityid": "2",
    //                 "functionalityname": "Add"
    //               },
    //               {
    //                 "functionalityid": "3",
    //                 "functionalityname": "Edit"
    //               }
    //             ],
    //             "sub_functionality": []
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   "pagesInfo": [
    //     {
    //       "code": "HMSGENMASTERTYPE",
    //       "title": "General Masters Types",
    //       "pagetype": "SEARCEDITFORM",
    //       "table": "",
    //       "key": "",
    //       "screens_in_tab": "",
    //       "screen": {
    //         "upload_req": "",
    //         "upload_proc": "",
    //         "load_view": "",
    //         "soft_delete_key": "",
    //         "active_key": "",
    //         "name": "General Masters Type",
    //         "table": "mst_configtypes",
    //         "key_id": "cnft_id",
    //         "ref_key_id": "",
    //         "type": "",
    //         "key_value": null,
    //         "childscreen": [],
    //         "fields": [
    //           {
    //             "compname": "textbox",
    //             "length": "",
    //             "dbfield": "cnft_name",
    //             "width": "",
    //             "height": "",
    //             "column_no": "1",
    //             "cols_spans": "",
    //             "title": "Type Name",
    //             "mandatory": "1",
    //             "on_change": "",
    //             "color": "",
    //             "format": "",
    //             "list": "",
    //             "order": "",
    //             "ref_combo": "",
    //             "editable": "",
    //             "cmp_group": "",
    //             "default_val": "",
    //             "hint": "",
    //             "style": "",
    //             "combo_search_proce": "",
    //             "combo_filter": "",
    //             "combo_value_field": "",
    //             "combo_disp_field": "",
    //             "combo_search_proce_type": "T",
    //             "unique": "",
    //             "value": null,
    //             "datavalues": null
    //           },
    //           {
    //             "compname": "checkbox",
    //             "length": "",
    //             "dbfield": "cnft_active",
    //             "width": "",
    //             "height": "",
    //             "column_no": "0",
    //             "cols_spans": "",
    //             "title": "Active",
    //             "mandatory": "",
    //             "on_change": "",
    //             "color": "",
    //             "format": "",
    //             "list": "",
    //             "order": "",
    //             "ref_combo": "",
    //             "editable": "",
    //             "cmp_group": "",
    //             "default_val": "",
    //             "hint": "",
    //             "style": "",
    //             "combo_search_proce": "",
    //             "combo_filter": "",
    //             "combo_value_field": "",
    //             "combo_disp_field": "",
    //             "combo_search_proce_type": "T",
    //             "unique": "",
    //             "value": null,
    //             "datavalues": null
    //           }
    //         ],
    //       },
    //       "search": {
    //         "title": "General Masters Type",
    //         "proc_name": "mst_configtypes",
    //         "multi_selection": "",
    //         "fields": [
    //           {
    //             "compname": "textbox",
    //             "length": "",
    //             "dbfield": "cnft_name",
    //             "width": "",
    //             "height": "",
    //             "column_no": null,
    //             "cols_spans": null,
    //             "title": "Type Name",
    //             "mandatory": null,
    //             "on_change": null,
    //             "color": null,
    //             "format": null,
    //             "list": "",
    //             "order": "",
    //             "ref_combo": null,
    //             "editable": null,
    //             "cmp_group": null,
    //             "default_val": "",
    //             "hint": null,
    //             "style": null,
    //             "combo_search_proce": "",
    //             "combo_filter": "",
    //             "combo_value_field": "",
    //             "combo_disp_field": "",
    //             "combo_search_proce_type": "T",
    //             "unique": null,
    //             "value": null,
    //             "datavalues": null
    //           }
    //         ],
    //       },
    //       "list": {
    //         "query_name": "",
    //         "query_type": "T",
    //         "title": "General Masters Type",
    //         "key": "cnft_id",
    //         "ref_key": "",
    //         "cmp_name": null,
    //         "listfields": [
    //           {
    //             "title": "Masters Type Name",
    //             "field": "cnft_name",
    //             "order": "1",
    //             "style": "",
    //             "filter": "",
    //             "sort": "",
    //             "align": "",
    //             "mandat": null,
    //             "unique": "",
    //             "unique_query": null,
    //             "query_type": "T",
    //             "comp_type": ""
    //           },
    //           {
    //             "title": "Is Active",
    //             "field": "cnft_active",
    //             "order": "2",
    //             "style": "",
    //             "filter": "",
    //             "sort": "",
    //             "align": "",
    //             "mandat": null,
    //             "unique": "",
    //             "unique_query": null,
    //             "query_type": "T",
    //             "comp_type": ""
    //           }
    //         ],
    //       },
    //       "tree": null,
    //       "report": {
    //         "header": null,
    //         "size": null,
    //         "styles": null,
    //         "page_type": null,
    //         "type": null,
    //         "proc_name": null,
    //         "filter": null,
    //         "footer": null,
    //         "parameterize": null,
    //         "report_name": null,
    //         "reportdetails": null
    //       }
    //     }
    //   ]
    // }



  }

}