import { Component, input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ThemeKind } from 'app/theming/theme-kind';

@Component({
	selector: 'app-theme-icon',
	imports: [ NgSwitchCase, NgSwitch ],
	templateUrl: './theme-icon.component.html',
})
export class ThemeIconComponent {
	public theme = input.required<ThemeKind>();

	public readonly ThemeKind = ThemeKind;
}
