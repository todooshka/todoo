import { IDeveloper } from './ideveloper';

export interface ITask {
  title: string;
  desription?: string;
  assignee?: IDeveloper;
}
