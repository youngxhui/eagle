import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './http/auth-interceptor';
import { BaseUrlInterceptor } from './http/base-url-interceptor';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        IconsProviderModule,
        LayoutModule,
        SharedModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            markedOptions: {
              provide: MarkedOptions,
            },
            sanitize: SecurityContext.NONE,
          }),
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN},
        {provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
