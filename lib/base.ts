import {
  SECONDS_TO_MILISECONDS_FACTOR,
  MINUTES_TO_MILISECONDS_FACTOR,
  HOURS_TO_MILISECONDS_FACTOR,
  DAYS_TO_MILISECONDS_FACTOR,
  WEEKS_TO_MILISECONDS_FACTOR
} from "./conversion";
import { Variant } from "./interval";

export abstract class Interval {
  public abstract readonly variant: Variant;

  protected readonly internalMilis: number
  
  public constructor(milis: number) {
    this.internalMilis = Math.floor(milis);
  }

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