import { Routes } from '@angular/router';
import { TaskListComponent } from 'pages/task-list/task-list.component';
import { TaskDetailsComponent } from 'pages/task-details/task-details.component';

export const routes: Routes = [
	{ path: 'tasks', component: TaskListComponent },
	{ path: 'tasks/:id', component: TaskDetailsComponent },
	{ path: '', redirectTo: 'tasks', pathMatch: 'full' },
];
