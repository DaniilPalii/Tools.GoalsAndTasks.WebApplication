import { Component, input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Theme } from '../../../../theming/theme';

@Component({
	selector: 'app-theme-icon',
	imports: [ NgSwitchCase, NgSwitch ],
	templateUrl: './theme-icon.component.html',
})
export class ThemeIconComponent {
	public theme = input.required<Theme>();

	public readonly Theme = Theme;
}
