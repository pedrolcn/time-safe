import { Variant } from "./interval";

export interface BaseInterval {
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

export interface Milisecond extends BaseInterval {
  variant: Variant.MILISECOND;
};

export interface Second extends BaseInterval {
  variant: Variant.SECOND;
}

export interface Minute extends BaseInterval {
  variant: Variant.MINUTE;
}

export interface Hour extends BaseInterval {
  variant: Variant.HOUR;
}

export interface Day extends BaseInterval {
  variant: Variant.DAY;
}
export interface Week extends BaseInterval {
  variant: Variant.WEEK
}