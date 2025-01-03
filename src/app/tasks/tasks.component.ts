import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TasksService } from './tasks.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Card } from 'primeng/card';

@Component({
	selector: 'app-tasks',
	imports: [ ButtonModule, TableModule, Card ],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
	public tasks: Task[] = [];

	public constructor(private taskService: TasksService) { }

	public ngOnInit(): void {
		this.taskService.getTasks().subscribe((tasks: Task[]) => {
			this.tasks = tasks;
		});
	}
}
