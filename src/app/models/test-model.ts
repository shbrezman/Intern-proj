import { questionModel } from './question-model';

export class testModel{
  examineeName: string = "";
  title: string = "";
  questions: questionModel[];
  score: number = null;
  date: Date

  public constructor(init?:Partial<testModel>) {
    Object.assign(this, init);
}
}

