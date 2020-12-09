import { ITask } from './@types/itask';

export function parse(input: string): ITask {
  return {
    title: input.split('TODO: ')[1],
  };
}
