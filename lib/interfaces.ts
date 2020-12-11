import { Variant } from "./interval";

export interface Interval {
  variant: Variant;

  /**
   * Returns the number of miliseconds contained in the interval
   */
  asMiliseconds(): number;

  /**
   * Returns the number of seconds contained in the interval
   */
  asSeconds(): number;

  /**
   * Returns the number of minutes contained in the interval
   */
  asMinutes(): number;

  /**
   * Returns the number of hours contained in the interval
   */
  asHours(): number;

  /**
   * Returns the number of days contained in the interval
   */
  asDays(): number;
  
  /**
   * Returns the number of weeks contained in the interval
   */
  asWeeks(): number;
}

export interface Milisecond extends Interval {
  variant: Variant.MILISECOND;
};

export interface Second extends Interval {
  variant: Variant.SECOND;
}

export interface Minute extends Interval {
  variant: Variant.MINUTE;
}

export interface Hour extends Interval {
  variant: Variant.HOUR;
}

export interface Day extends Interval {
  variant: Variant.DAY;
}
export interface Week extends Interval {
  variant: Variant.WEEK
}