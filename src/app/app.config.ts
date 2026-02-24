import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // use hash location strategy so GitHub Pages (and any static server)
    // never has to know about Angular's client-side routes; everything
    // remains under “#/…”.  this avoids 404s when someone refreshes or
    // bookmarks /admin/dashboard, /foo/bar, etc.
    provideRouter(routes, withHashLocation()),
    provideClientHydration(withEventReplay())
  ]
};
