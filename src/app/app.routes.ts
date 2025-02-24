import { Routes } from '@angular/router';
import { TaskListPageComponent } from 'pages/task-list/task-list-page.component';
import { TaskDetailsComponent } from 'pages/task-details/task-details.component';
import { GoalListComponent } from 'pages/goal-list/goal-list.component';

export const routes: Routes = [
	{ path: 'tasks', component: TaskListPageComponent, pathMatch: 'full' },
	{ path: 'tasks/:id', component: TaskDetailsComponent, pathMatch: 'full' },
	{ path: 'goals', component: GoalListComponent, pathMatch: 'full' },
	{ path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
