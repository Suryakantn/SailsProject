import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vernost-search',
  templateUrl: './vernost-search.html',
  styleUrls: ['./vernost-search.css']
})

export class VernostSearchComponent {

  @Input('searchtitle') searchtitle: string;

}