import { Routes } from '@angular/router';
import { TaskListComponent } from 'pages/task-list/task-list.component';
import { TaskDetailsComponent } from 'pages/task-details/task-details.component';

export const routes: Routes = [
	{ path: '', component: TaskListComponent },
	{ path: 'tasks', component: TaskListComponent },
	{ path: 'task-details', component: TaskDetailsComponent },
];
