import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Task } from './task';
import { TasksService } from './tasks.service';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-tasks',
	imports: [
		NgForOf,
		ButtonModule,
	],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
	tasks: Task[] = [];

	constructor(private taskService: TasksService) { }

	ngOnInit(): void {
		this.taskService.getTasks().subscribe((tasks: any[]) => {
			this.tasks = tasks;
		});
	}
}
