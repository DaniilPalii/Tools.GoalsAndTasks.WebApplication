import { Component, effect, inject, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ThemeIconComponent } from './theme-icon/theme-icon.component';
import { ThemeService } from 'app/theming/theme.service';
import { ThemeToggleItem } from './theme-toggle-item';
import { ThemeKind } from '../../../theming/theme-kind';

@Component({
	selector: 'app-theme-toggle',
	imports: [ Select, FormsModule, ThemeIconComponent ],
	templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {

	public readonly themeItems: ThemeToggleItem[] = [
		{ theme: ThemeKind.system, title: 'System theme' },
		{ theme: ThemeKind.light, title: 'Light theme' },
		{ theme: ThemeKind.dark, title: 'Dark theme' },
	];

	public selectedThemeItem = signal(this.themeItems[0]);

	private readonly themeService = inject(ThemeService);

	public constructor() {
		effect(() => {
			switch (this.selectedThemeItem().theme) {
				case ThemeKind.system:
					this.themeService.setSystemTheme();
					break;
				case ThemeKind.light:
					this.themeService.setLightTheme();
					break;
				case ThemeKind.dark:
					this.themeService.setDarkTheme();
					break;
			}
		});
	}
}
