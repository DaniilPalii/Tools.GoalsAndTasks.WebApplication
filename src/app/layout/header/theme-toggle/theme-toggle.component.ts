import { Component, effect, inject, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ThemeIconComponent } from './theme-icon/theme-icon.component';
import { Theme } from '../../../theming/theme';
import { ThemeService } from 'app/theming/theme.service';
import { ThemeToggleItem } from './theme-toggle-item';

@Component({
	selector: 'app-theme-toggle',
	imports: [ Select, FormsModule, ThemeIconComponent ],
	templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {

	public readonly themeItems: ThemeToggleItem[] = [
		{ theme: Theme.system, title: 'System theme' },
		{ theme: Theme.light, title: 'Light theme' },
		{ theme: Theme.dark, title: 'Dark theme' },
	];

	public selectedThemeItem = signal(this.themeItems[0]);

	private readonly themeService = inject(ThemeService);

	public constructor() {
		effect(() => {
			switch (this.selectedThemeItem().theme) {
				case Theme.system:
					this.themeService.setSystemTheme();
					break;
				case Theme.light:
					this.themeService.setLightTheme();
					break;
				case Theme.dark:
					this.themeService.setDarkTheme();
					break;
			}
		});
	}
}
