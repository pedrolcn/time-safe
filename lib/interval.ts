import {
  SECONDS_TO_MILISECONDS_FACTOR,
  MINUTES_TO_MILISECONDS_FACTOR,
  HOURS_TO_MILISECONDS_FACTOR,
  DAYS_TO_MILISECONDS_FACTOR,
  WEEKS_TO_MILISECONDS_FACTOR,
} from './conversion';
import { BaseInterval } from './interfaces';

type Ctor<T> = new(...args: any) => T;

export enum Variant {
  MILISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
}

const Interval: Ctor<BaseInterval> = typeof BigInt === 'function'
  ? require('./base-bigInt').Interval
  : require('./base').Interval

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
