import { Screening } from "~src/chapter5/Screening";

enum DiscountConditionType {
  PERIOD,
  SEQUENCE,
}

type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * deprecated period condition과 sequence condition로 대체됨
 */
export class DiscountCondition {
  private type: DiscountConditionType;
  private sequence: number;
  private dayOfWeek?: DayOfWeek;
  private startTime?: number;
  private endTime?: number;

  constructor(
    type: DiscountConditionType,
    sequence: number,
    dayOfWeek?: DayOfWeek,
    startTime?: number,
    endTime?: number
  ) {
    this.type = type;
    this.sequence = sequence;
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    if (this.type === DiscountConditionType.PERIOD) {
      return this.isSatisfiedByPeriod(screening);
    }

    return this.isSatisfiedBySequence(screening);
  }

  private isSatisfiedByPeriod(screening: Screening): boolean {
    if (!this.dayOfWeek || !this.startTime || !this.endTime) {
      throw new Error("Missing dayOfWeek, startTime, or endTime");
    }

    return (
      this.dayOfWeek === daysOfWeek[screening.getWhenScreened().getDay()] &&
      this.startTime <= screening.getWhenScreened().getTime() &&
      this.endTime >= screening.getWhenScreened().getTime()
    );
  }

  private isSatisfiedBySequence(screening: Screening): boolean {
    return this.sequence === screening.getSequence();
  }
}
