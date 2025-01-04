import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
	selector: 'app-root',
	imports: [ TasksComponent, TopBarComponent ],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent { }
