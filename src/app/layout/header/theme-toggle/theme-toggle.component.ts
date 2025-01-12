import { Component, effect, inject, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { Theme, ThemeService } from '../../../../services/theme.service';
import { ThemeIconComponent } from './theme-icon/theme-icon.component';

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

	public setSystemTheme(): void {
		this.themeService.setSystemTheme();
	}

	public setLightTheme(): void {
		this.themeService.setLightTheme();
	}

	public setDarkTheme(): void {
		this.themeService.setDarkTheme();
	}
}
