import { Milisecond, Second, Minute, Hour, Day, Week } from "./interval";

export class TimeSafe {
  public static miliseconds(miliseconds: number): Milisecond {
    return new Milisecond(miliseconds);
  }

  public static seconds(seconds: number): Second {
    return new Second(seconds);
  }

  public static minutes(minutes: number): Minute {
    return new Minute(minutes);
  }

  public static hours(hours: number): Hour {
    return new Hour(hours);
  }

  public static days(days: number): Day {
    return new Day(days);
  }

  public static weeks(weeks: number): Week {
    return new Week(weeks);
  }
}
