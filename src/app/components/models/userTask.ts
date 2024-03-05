import { SubTask } from './subTask';
import { TaskStatus } from '../enums/taskStatus';
import { User } from './user'; 
import { CreateTeam } from './creatTeam';

export class UserTask {
  userTaskName: string = '';
  description: string = '';
  subTasks: SubTask[] = [];
  status?: TaskStatus; 
  assignee?: User; 
  team?: CreateTeam; 
}
