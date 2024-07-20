import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { setHeadersInterceptor } from './interceptors/set-headers.interceptor';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
     provideAnimationsAsync(),provideNativeDateAdapter(),
     provideHttpClient(withInterceptors([setHeadersInterceptor]))]
};
