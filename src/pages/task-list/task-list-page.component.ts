import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { Fieldset } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { TaskDetails } from 'transfer/task-details';
import { TaskService } from 'transfer/task.service';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
	selector: 'app-task-list',
	imports: [ ButtonModule, TableModule, Card, TaskFormComponent, Fieldset ],
	templateUrl: './task-list-page.component.html',
})
export class TaskListPageComponent implements OnInit {
	private readonly taskService = inject(TaskService);
	private readonly router = inject(Router);
	private readonly destroyRef = inject(DestroyRef);

	protected tasks: TaskDetails[] = [];
	protected loading = true;
	protected doesCreatingTask = false;

	public ngOnInit(): void {
		this.taskService
			.getTasks()
			.pipe(
				takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (tasks) => {
					this.tasks = tasks;
					this.loading = false;
				},
				error: (error) => {
					console.error('Failed to load tasks', error);
				}
			});
	}

	public navigateToTask(taskId: number): void {
		this.router.navigate([ 'tasks', taskId ]);
	}
}
