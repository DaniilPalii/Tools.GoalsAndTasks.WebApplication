export interface Task {
	id: number;
	title: string;
	startDate?: Date;
	startTime?: Date;
	dueDate?: Date;
	dueTime?: Date;
	isComplete: boolean;
}
