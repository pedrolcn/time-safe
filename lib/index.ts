import {
  Milisecond as MilisecondClass,
  Second as SecondClass,
  Minute as MinuteClass,
  Hour as HourClass,
  Day as DayClass,
  Week as WeekClass
} from "./interval";
import { Milisecond, Second, Minute, Hour, Day, Week } from './interfaces';

export class TimeSafe {
  public static miliseconds(miliseconds: number): Milisecond {
    return new MilisecondClass(miliseconds);
  }

  public static seconds(seconds: number): Second {
    return new SecondClass(seconds);
  }

  public static minutes(minutes: number): Minute {
    return new MinuteClass(minutes);
  }

  public static hours(hours: number): Hour {
    return new HourClass(hours);
  }

  public static days(days: number): Day {
    return new DayClass(days);
  }

  public static weeks(weeks: number): Week {
    return new WeekClass(weeks);
  }
}
