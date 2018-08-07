import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImageUploadModule } from 'ng2-imageupload';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModelPageComponent } from './model-page/model-page.component';
import { ModelSearchPageComponent } from './model-search-page/model-search-page.component';
// import { ModelInputComponent } from './model-input/model-input.component';
import { ModelScreenPageComponent } from './model-screen-page/model-screen-page.component';
import { ModelListPageComponent } from './model-list-page/model-list-page.component';
import { ModelListPageItemComponent } from './model-list-page-item/model-list-page-item.component';
import { TinyEditorComponent } from "./tiny-editor/tiny-editor.component";

import { VernostSearchComponent } from "./vernost-search/vernost-search";
import { VernostScreenComponent } from "./vernost-screen/vernost-screen";
//import { CoreLibModule } from "core-library-new-test";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelPageComponent,
    ModelSearchPageComponent,
    // ModelInputComponent,
    ModelScreenPageComponent,
    ModelListPageComponent,
    ModelListPageItemComponent,
    TinyEditorComponent,
    VernostSearchComponent,
    VernostScreenComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    AutoCompleteModule,
    ImageUploadModule,
    //CoreLibModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'model/:name', component: ModelPageComponent }
    ], { useHash: true })
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
