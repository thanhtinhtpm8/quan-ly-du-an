import { HttpInterceptorFn } from '@angular/common/http';

export const setHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    headers:req.headers.set('authorization','Bearer '+localStorage.getItem('token')),
  })
  return next(request);
};
