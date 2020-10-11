import {ModuleWithProviders, NgModule} from '@angular/core';
import { ApiComponent } from './api.component';
import {ApiService} from "./api.service";
import {KnowledgeApiService} from "./knowledge-api.service";
import {BASE_URL, PROD} from "./tokens";
import {BasicAuthInterceptor} from "./basic-auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

export interface APIOption {
  baseUri: string;
}


@NgModule({
  declarations: [ApiComponent],
  imports: [
  ],
  exports: [ApiComponent]
})
export class ApiModule {

  public static forRoot(opts: APIOption): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        ApiService,
        KnowledgeApiService,
        {
          useValue: opts.baseUri,
          provide: BASE_URL,
        },
        {
          useClass: BasicAuthInterceptor,
          provide: HTTP_INTERCEPTORS,
          multi: true
        }
      ]
    }
  }
}
