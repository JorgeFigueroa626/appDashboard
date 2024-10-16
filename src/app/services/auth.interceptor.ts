import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _loginService: LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this._loginService.getToken();
        if (token != null) {
            authReq = authReq.clone({setHeaders: {Authorization: `Bearer ${token}`}
            })
        }
        return next.handle(authReq);
    }
}

//lo exportamos y injectamos en el modulo principal, lo ingresamos en el provider
export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi:true
    }
]