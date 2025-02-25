import { Component, DestroyRef, inject, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';
import { TaskDetails } from 'transfer/task-details';
import { TaskService } from 'transfer/task.service';

@Component({
	selector: 'app-task-form',
	imports: [ ReactiveFormsModule, InputText, DatePicker, Button ],
	templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
	private readonly taskService = inject(TaskService);
	private readonly formBuilder = inject(NonNullableFormBuilder);
	private readonly destroyRef = inject(DestroyRef);

	private task: TaskDetails = {
		id: 0,
		title: '',
		isComplete: false,
	};

	protected taskFormGroup = this.formBuilder.group({
		title: this.formBuilder.control(this.task.title, Validators.required),
		startDate: this.formBuilder.control(this.task.startDate),
		startTime: this.formBuilder.control(this.task.startTime),
		dueDate: this.formBuilder.control(this.task.dueDate),
		dueTime: this.formBuilder.control(this.task.dueTime),
	});

	protected saved = output<TaskDetails>();

	protected saveTask(): void {
		this.taskService
			.addTask({
				title: this.taskFormGroup.value.title!,
				startDate: this.taskFormGroup.value.startDate,
				startTime: this.taskFormGroup.value.startTime,
				dueDate: this.taskFormGroup.value.dueDate,
				dueTime: this.taskFormGroup.value.dueTime,
				id: this.task.id,
				isComplete: this.task.isComplete,
			})
			.pipe(
				takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (addedTask: TaskDetails) => {
					this.taskFormGroup.reset();
					this.saved.emit(addedTask);
				},
				error: (error) => {
					console.error('Failed to save task', error);
				}
			});
	}
}
