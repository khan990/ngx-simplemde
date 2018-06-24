import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as SimpleMDE from 'simplemde/src/js/simplemde';
import { SimpleMdeConfiguration } from './app.model';

@Component({
  selector: 'lib-ngx-simple-mde',
  template: `
  <textarea #simpleMde></textarea>
  `,
  styles: []
})
export class NgxSimpleMdeComponent implements AfterViewInit {

  @ViewChild('simpleMde')
  editor: ElementRef;

  @Input()
  config: SimpleMdeConfiguration = { };

  editorVar: any;
/*
  testConfig: SimpleMdeConfiguration = {
    autofocus: true,
    autosave: <any> {
      enabled: true,
      uniqueId: 'MyUniqueID',
      delay: 1000,
    },
    blockStyles: {
      bold: '__',
      italic: '_'
    },
    element: undefined,
    forceSync: true,
    hideIcons: ['guide', 'heading'],
    indentWithTabs: false,
    initialValue: 'Hello world!',
    insertTexts: <any> {
      horizontalRule: ['', '\n\n-----\n\n'],
      image: ['![](http://', ')'],
      link: ['[', '](http://)'],
      table: ['', '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n'],
    },
    lineWrapping: false,
    parsingConfig: {
      allowAtxHeaderWithoutSpace: true,
      strikethrough: false,
      underscoresBreakWords: true,
    },
    placeholder: 'Type here...',
    previewRender: function(plainText) {
      return plainText + '---changed---'; // Returns HTML from a custom parser
    },
    promptURLs: true,
    renderingConfig: {
      singleLineBreaks: false,
      codeSyntaxHighlighting: true,
    },
    shortcuts: <any> {
      drawTable: 'Cmd-Alt-T'
    },
    showIcons: ['code', 'table', 'bold'],
    spellChecker: false,
    // status: false,
    // status: ['autosave', 'lines', 'words', 'cursor'], // Optional usage
    status: ['autosave', 'lines', 'words', 'cursor', {
      className: 'keystrokes',
      defaultValue: function(el) {
        this.keystrokes = 0;
        el.innerHTML = '0 Keystrokes';
      },
      onUpdate: function(el) {
        el.innerHTML = ++this.keystrokes + ' Keystrokes';
      }
    }], // Another optional usage, with a custom status bar item that counts keystrokes
    styleSelectedText: false,
    tabSize: 4,
    toolbar: ['bold', 'italic'],
    toolbarTips: false,
  };
*/
  ngAfterViewInit() {
    this.config.element = this.editor.nativeElement;
    this.editorVar = new SimpleMDE(this.config);
    // this.editorVar = new SimpleMDE({ element: this.editor.nativeElement });
  }

}
