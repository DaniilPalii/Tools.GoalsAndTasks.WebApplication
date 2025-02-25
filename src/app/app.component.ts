import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@Component({
	selector: 'app-root',
	imports: [ RouterOutlet, HeaderComponent, NavigationComponent, Toast ],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {}
