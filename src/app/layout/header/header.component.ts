import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
	selector: 'app-header',
	imports: [ CommonModule, FormsModule, RouterModule, Toolbar, Button, IconField, InputIcon, InputText, ThemeToggleComponent ],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

}
