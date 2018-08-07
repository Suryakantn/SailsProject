import { Component, AfterViewInit, EventEmitter, OnDestroy, Input, Output } from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/image';
import 'tinymce/plugins/colorpicker';

declare var tinymce: any;

@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.css']
})

export class TinyEditorComponent {

  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();

  editor: any;
  private innerValue: string;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      branding: false,
      plugins: ['link', 'table', 'paste', 'code', 'textcolor', 'colorpicker', 'image'],
      toolbar: 'code | bold italic strikethrough forecolor backcolor | link | image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | fontsizeselect | fontselect | removeformat',
      skin_url: 'assets/skins/lightgray',
      setup: (editor: any) => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      }
    });
  }


  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
