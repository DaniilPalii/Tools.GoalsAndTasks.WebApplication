import { inject, Injectable } from '@angular/core';
import { definePreset } from '@primeng/themes';
import auraPreset from '@primeng/themes/aura';
import { DOCUMENT } from '@angular/common';
import { PrimeNG, ThemeType } from 'primeng/config';

@Injectable({ providedIn: 'root' })
export class ThemeService {
	private static readonly darkThemeClass = 'app-dark';

	private document = inject(DOCUMENT);
	private primeNg = inject(PrimeNG);

	public static createThemeWithManualDarkMode(): ThemeType {
		return this.createThemeWithDarkModeSelector(`.${this.darkThemeClass}`);
	}

	public static createThemeWithAutomaticDarkMode(): ThemeType {
		return this.createThemeWithDarkModeSelector('system');
	}

	private static createThemeWithDarkModeSelector(darkModeSelector: string): ThemeType {
		return {
			preset: definePreset(auraPreset),
			options: {
				cssLayer: { name: 'primeng' },
				prefix: 'app',
				darkModeSelector: darkModeSelector,
			},
		};
	}

	public setSystemTheme(): void {
		this.document.documentElement.style.setProperty('color-scheme', 'light dark');
		this.setTheme(
			ThemeService.createThemeWithAutomaticDarkMode());
	}

	public setLightTheme(): void {
		this.document.documentElement.classList.remove(ThemeService.darkThemeClass);
		this.document.documentElement.style.setProperty('color-scheme', 'light');
		this.setTheme(
			ThemeService.createThemeWithManualDarkMode());
	}

	public setDarkTheme(): void {
		this.document.documentElement.classList.add(ThemeService.darkThemeClass);
		this.document.documentElement.style.setProperty('color-scheme', 'dark');
		this.setTheme(
			ThemeService.createThemeWithManualDarkMode());
	}

	private setTheme(theme: ThemeType): void {
		this.primeNg.setThemeConfig({ theme: theme });
	}
}

export enum Theme {
	system = 1,
	light = 2,
	dark = 3,
}
