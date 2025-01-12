import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Card } from 'primeng/card';
import { TaskDetails } from '../../transfer/task-details';
import { TaskService } from '../../transfer/task.service';

@Component({
	selector: 'app-task-list',
	imports: [ ButtonModule, TableModule, Card ],
	templateUrl: './task-list.component.html',
	styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
	public tasks: TaskDetails[] = [];
	private readonly taskService = inject(TaskService);

	public ngOnInit(): void {
		this.taskService.getTasks().subscribe((tasks: TaskDetails[]) => {
			this.tasks = tasks;
		});
	}
}
