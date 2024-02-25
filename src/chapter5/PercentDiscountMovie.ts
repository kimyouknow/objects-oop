import { DiscountCondition } from "~src/chapter5/DiscountCondition";
import { Money } from "~src/chapter5/Money";
import { Movie } from "~src/chapter5/Movie";

export class PercentDiscountMovie extends Movie {
  private percent: number;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    percent: number,
    ...discountConditions: DiscountCondition[]
  ) {
    super(title, runningTime, fee, ...discountConditions);
    this.percent = percent;
  }

  protected calculateDiscountAmount(): Money {
    return this.getFee().times(this.percent);
  }
}
