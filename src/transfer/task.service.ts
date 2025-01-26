import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDetails } from './task-details';

@Injectable({ providedIn: 'root' })
export class TaskService {
	private readonly http = inject(HttpClient);

	public getTasks(): Observable<TaskDetails[]> {
		return this.http.get<TaskDetails[]>('tasks');
	}

	public getTask(id: number): Observable<TaskDetails> {
		return this.http.get<TaskDetails>(`tasks/${id}`);
	}
}
