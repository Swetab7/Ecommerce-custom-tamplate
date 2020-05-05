import { Injectable } from "@angular/core";
import { HttpInterceptor,HttpHandler,HttpRequest,HttpHeaders,HttpEvent} from "@angular/common/http";

import { Observable, of } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) :
  Observable < HttpEvent < any >> {
  	
    console.warn('its working');
    const token=localStorage.getItem("LoggedInUser");
   	if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }

    return next.handle(req);
    
  }
}

