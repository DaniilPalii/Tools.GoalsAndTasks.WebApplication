import { routes } from './app.routes';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import auraPreset from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideHttpClient(withFetch()),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: definePreset(auraPreset),
				options: {
					cssLayer: { name: 'primeng' },
					prefix: 'app',
				},
			},
		}),
	],
};
