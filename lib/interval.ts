import {
  SECONDS_TO_MILISECONDS_FACTOR,
  MINUTES_TO_MILISECONDS_FACTOR,
  HOURS_TO_MILISECONDS_FACTOR,
  DAYS_TO_MILISECONDS_FACTOR,
  WEEKS_TO_MILISECONDS_FACTOR,
} from './conversion';

export enum Variant {
  MILISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
}

abstract class Interval {
  public abstract readonly variant: Variant;

  public constructor(
    protected readonly internalMilis: number,
  ) {};

  /**
   * Returns the number of miliseconds contained in the interval
   */
  public asMiliseconds(): number {
    return this.internalMilis;
  }

  /**
   * Returns the number of seconds contained in the interval
   */
  public asSeconds(): number {
    return this.internalMilis / SECONDS_TO_MILISECONDS_FACTOR;
  }

  /**
   * Returns the number of minutes contained in the interval
   */
  public asMinutes(): number {
    return this.internalMilis / MINUTES_TO_MILISECONDS_FACTOR;
  }

  /**
   * Returns the number of hours contained in the interval
   */
  public asHours(): number {
    return this.internalMilis / HOURS_TO_MILISECONDS_FACTOR;
  }

  /**
   * Returns the number of days contained in the interval
   */
  public asDays(): number {
    return this.internalMilis / DAYS_TO_MILISECONDS_FACTOR;
  }

  /**
   * Returns the number of weeks contained in the interval
   */
  public asWeeks(): number {
    return this.internalMilis / WEEKS_TO_MILISECONDS_FACTOR;
  }
}

export class Milisecond extends Interval {
  public readonly variant: Variant.MILISECOND = Variant.MILISECOND;

  constructor(miliseconds: number) {
    super(miliseconds);
  }
}

export class Second extends Interval {
  public readonly variant: Variant.SECOND = Variant.SECOND;

  constructor(seconds: number) {
    super(seconds * SECONDS_TO_MILISECONDS_FACTOR);
  }
}

export class Minute extends Interval {
  public readonly variant: Variant.MINUTE = Variant.MINUTE;

  constructor(minutes: number) {
    super(minutes * MINUTES_TO_MILISECONDS_FACTOR);
  }
}

export class Hour extends Interval {
  public readonly variant: Variant.HOUR = Variant.HOUR;

  constructor(hours: number) {
    super(hours * HOURS_TO_MILISECONDS_FACTOR);
  }
}

export class Day extends Interval {
  public readonly variant: Variant.DAY = Variant.DAY;

  constructor(days: number) {
    super(days * DAYS_TO_MILISECONDS_FACTOR);
  }
}

export class Week extends Interval {
  public readonly variant: Variant.WEEK = Variant.WEEK;

  constructor(weeks: number) {
    super(weeks * WEEKS_TO_MILISECONDS_FACTOR);
  }
}
