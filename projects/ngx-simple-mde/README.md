# NgxSimplemde (beta)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Example
Install ngx-simple-md-editor
> npm i ngx-simple-md-editor font-awesome simplemde --save

Add following css to angular.json
```javascript
//...
"styles": [
//...
  "node_modules/simplemde/dist/simplemde.min.css",
//...
],
//...
```

Import ngx-simple-md-editor in module.ts
```javascript
import { NgxSimpleMdeModule } from 'ngx-simple-md-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSimpleMdeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```

To use ngx-simple-md-editor in html:
> <lib-ngx-simple-mde></lib-ngx-simple-mde>
or
> <lib-ngx-simple-mde [config]="settings"></lib-ngx-simple-mde>
for more information regarding configuration, visit [SimpleMDE github Readme.md](https://github.com/sparksuite/simplemde-markdown-editor)

## Development server (demo app)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` for demo application.
Run `ng build ngx-simple-mde` for building library.

## Further help

SimpleMDE [github](https://github.com/sparksuite/simplemde-markdown-editor) [official site](https://simplemde.com/)

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License 
MIT
