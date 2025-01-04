import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

@Component({
	selector: 'app-top-bar',
	imports: [ CommonModule, FormsModule, RouterModule, Toolbar, Button, IconField, InputIcon, InputText ],
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.css',
	encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent {

}
