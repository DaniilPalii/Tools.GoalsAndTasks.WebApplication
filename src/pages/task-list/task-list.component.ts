import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Card } from 'primeng/card';
import { TaskDetails } from 'transfer/task-details';
import { TaskService } from 'transfer/task.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-task-list',
	imports: [ ButtonModule, TableModule, Card, AsyncPipe ],
	templateUrl: './task-list.component.html',
	styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
	public tasks$!: Observable<TaskDetails[]>;

	private readonly taskService = inject(TaskService);
	private readonly router = inject(Router);

	public ngOnInit(): void {
		this.tasks$ = this.taskService.getTasks();
	}

	public navigateTo(taskId: number): void {
		this.router.navigate([ 'tasks', taskId ]);
	}
}
