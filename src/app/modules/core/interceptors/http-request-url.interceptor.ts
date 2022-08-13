import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_PATH } from '@environment';
import { Observable } from 'rxjs';

import { WINDOW } from '../window/window.constants';

@Injectable()
export class HttpRequestURLInterceptor implements HttpInterceptor {
  public constructor(@Inject(WINDOW) private window: Window) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        url: `${BASE_API_PATH}/${request.url}`
      })
    );
  }
}
