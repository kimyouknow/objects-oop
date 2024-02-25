import { Screening } from "~src/chapter5/Screening";

enum DiscountConditionType {
  SEQUENCE,
  PERIOD,
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

export class DiscountCondition {
  private type: DiscountConditionType;
  private sequence: number;
  private dayOfWeek?: DayOfWeek;
  private startTime?: number;
  private endTime?: number;

  constructor(sequence: number);
  constructor(dayOfWeek: DayOfWeek, startTime: number, endTime: number);
  constructor(
    sequenceOrDayOfWeek: number | DayOfWeek,
    startTime?: number,
    endTime?: number
  ) {
    if (typeof sequenceOrDayOfWeek === "number") {
      this.type = DiscountConditionType.SEQUENCE;
      this.sequence = sequenceOrDayOfWeek;
    } else {
      this.type = DiscountConditionType.PERIOD;
      this.dayOfWeek = sequenceOrDayOfWeek;
      this.startTime = startTime;
      this.endTime = endTime;
    }
  }

  isDiscountable(screening: Screening): boolean {
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
