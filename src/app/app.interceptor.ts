import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private snackBar: MatSnackBar) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiPrefix = environment.apiPrefix;
        const requestURL = request.url;
        request = request.clone({
            url: apiPrefix + requestURL,
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                this.snackBar.open(error.message, null, {
                    duration: 5000,
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
                return throwError(error);
            })
        );
    }
}
