import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';

import { WindowRef } from './abstractions/window-ref.abstraction';
import { AuthenticationApi } from './api/authentication.api';
import { appInitializingFactory } from './factories/app-initializing.factory';
import { HttpRequestHeadersInterceptor } from './interceptors/http-request-headers.interceptor';
import { HttpRequestURLInterceptor } from './interceptors/http-request-url.interceptor';
import { CookieStore } from './stores/cookie.store';
import { BrowserWindowRef } from './window/browser-window-ref';
import { WINDOW } from './window/window.constants';
import { windowFactory } from './window/window.factory';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    CookieStore,
    AuthenticationApi,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializingFactory,
      multi: true,
      deps: []
    },
    {
      provide: WindowRef,
      useClass: BrowserWindowRef
    },
    {
      provide: WINDOW,
      useFactory: windowFactory,
      deps: [WindowRef, PLATFORM_ID]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestURLInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestHeadersInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
