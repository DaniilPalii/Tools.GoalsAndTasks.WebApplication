import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
	private apiUrl = 'https://goalsandtasksapi.azurewebsites.net/tasks';

	constructor(private http: HttpClient) { }

	getTasks(): Observable<Task[]> {
		return this.http.get<Task[]>(this.apiUrl);
	}
}
