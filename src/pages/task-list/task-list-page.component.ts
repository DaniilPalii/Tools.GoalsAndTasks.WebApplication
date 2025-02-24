import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { Fieldset } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';
import { TaskDetails } from 'transfer/task-details';
import { TaskService } from 'transfer/task.service';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
	selector: 'app-task-list',
	imports: [ ButtonModule, TableModule, Card, AsyncPipe, TaskFormComponent, Fieldset ],
	templateUrl: './task-list-page.component.html',
})
export class TaskListPageComponent implements OnInit {
	public tasks$!: Observable<TaskDetails[]>;
	public doesCreatingTask = false;

	private readonly taskService = inject(TaskService);
	private readonly router = inject(Router);

	public ngOnInit(): void {
		this.tasks$ = this.taskService.getTasks();
	}

	public navigateToTask(taskId: number): void {
		this.router.navigate([ 'tasks', taskId ]);
	}
}
