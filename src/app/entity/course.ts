import Level from './level';
import { SubTip } from './subTip';
import { Tip } from './tip';

export class Course {
  
  id: number;

  name = '';

  level: Level;

  teacher: string;

  rate: number;

  cover: string;

  description: string;

  enable: boolean;

  institution: string;

  online: boolean;

  /**
   * 授课时长
   */
  period: number;

  subTip: SubTip;

  tip: Tip;

  url: string;

  catalog: string;
}
