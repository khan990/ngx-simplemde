import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as SimpleMDE from 'simplemde/src/js/simplemde';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('simpleMde')
  editor: ElementRef;

  editorVar: any;

  ngAfterViewInit() {
    this.editorVar = new SimpleMDE({ element: this.editor.nativeElement });
  }
}
