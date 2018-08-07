import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vernost-screen',
  templateUrl: './vernost-screen.html',
  styleUrls: ['./vernost-screen.css']
})

export class VernostScreenComponent {

  @Input('screentitle') screentitle: string;

}