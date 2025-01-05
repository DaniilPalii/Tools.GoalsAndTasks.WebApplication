import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDetails } from '../transfer-values/task-details';

@Injectable({ providedIn: 'root' })
export class TaskService {
	private apiUrl: string = 'https://goalsandtasksapi.azurewebsites.net/tasks';

	public constructor(private http: HttpClient) { }

	public getTasks(): Observable<TaskDetails[]> {
		return this.http.get<TaskDetails[]>(this.apiUrl);
	}
}
