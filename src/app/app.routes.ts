import { Routes } from '@angular/router';
import { TaskListComponent } from 'pages/task-list/task-list.component';
import { TaskDetailsComponent } from 'pages/task-details/task-details.component';
import { GoalListComponent } from 'pages/goal-list/goal-list.component';

export const routes: Routes = [
	{ path: 'tasks', component: TaskListComponent },
	{ path: 'tasks/:id', component: TaskDetailsComponent },
	{ path: 'goals', component: GoalListComponent },
	{ path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
