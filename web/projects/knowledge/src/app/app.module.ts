import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import all Froala Editor plugins.
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// Import a Froala Editor language file.
// import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
// import 'froala-editor/js/third_party/font_awesome.min';
// import 'froala-editor/js/third_party/image_tui.min';
// import 'froala-editor/js/third_party/spell_checker.min';
// import 'froala-editor/js/third_party/embedly.min';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {ApiModule} from "../../../api/src/lib/api.module";
import {SharedKnowledgeModule} from "./shared-knowledge/shared-knowledge.module";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ApiModule.forRoot({
      baseUri: 'http://localhost:8000',
    }),
    SharedKnowledgeModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
