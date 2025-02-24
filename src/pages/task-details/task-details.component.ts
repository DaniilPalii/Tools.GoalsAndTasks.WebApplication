import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { Observable } from 'rxjs';
import { TaskDetails } from 'transfer/task-details';
import { TaskService } from 'transfer/task.service';

@Component({
	selector: 'app-task-details',
	imports: [ AsyncPipe, NgIf, Card ],
	templateUrl: './task-details.component.html',
	styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent {
	public task$!: Observable<TaskDetails>;

	private readonly taskService = inject(TaskService);

	@Input()
	public set id(id: number) {
		this.task$ = this.taskService.getTask(id);
	}
}
