import { Component, effect, inject, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ThemeIconComponent } from './theme-icon/theme-icon.component';
import { Theme } from '../../../theming/theme';
import { ThemeService } from '../../../theming/theme.service';

@Component({
	selector: 'app-theme-toggle',
	imports: [ Select, FormsModule, ThemeIconComponent ],
	templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
	public readonly themes = [ Theme.system, Theme.light, Theme.dark ];
	public selectedTheme = signal(Theme.system);

	private readonly themeService = inject(ThemeService);

	public constructor() {
		effect(() => {
			switch (this.selectedTheme()) {
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
