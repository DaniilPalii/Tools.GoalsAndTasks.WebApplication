import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

@Component({
	selector: 'app-root',
	imports: [ TasksComponent, TopBarComponent, SideBarComponent ],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {}
