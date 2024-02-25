import { DiscountCondition } from "~src/chapter5/DiscountCondition";
import { Money } from "~src/chapter5/Money";
import { Screening } from "~src/chapter5/Screening";
export abstract class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountConditions: DiscountCondition[];

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    ...discountConditions: DiscountCondition[]
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountConditions = discountConditions;
  }

  calculateMovieFee(screening: Screening) {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }
    return this.fee;
  }

  private isDiscountable(screening: Screening) {
    return this.discountConditions.some((condition) =>
      condition.isSatisfiedBy(screening)
    );
  }

  protected getFee() {
    return this.fee;
  }

  protected abstract calculateDiscountAmount(): Money;
}
