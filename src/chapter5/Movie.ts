import { DiscountCondition } from "~src/chapter5/DiscountCondition";
import { Money } from "~src/chapter5/Money";
import { PeriodCondition } from "~src/chapter5/PeriodCondition";
import { Screening } from "~src/chapter5/Screening";
import { SequenceCondition } from "~src/chapter5/SequenceCondition";

enum MovieType {
  AMOUNT_DISCOUNT,
  PERCENT_DISCOUNT,
  NONE_DISCOUNT,
}

export class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountConditions: DiscountCondition[];
  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;
  private periodConditions: PeriodCondition[];
  private sequenceConditions: SequenceCondition[];

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountConditions: DiscountCondition[],
    movieType: MovieType,
    discountAmount: Money,
    discountPercent: number,
    periodConditions: PeriodCondition[],
    sequenceConditions: SequenceCondition[]
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountConditions = discountConditions;
    this.movieType = movieType;
    this.discountAmount = discountAmount;
    this.discountPercent = discountPercent;
    this.periodConditions = periodConditions;
    this.sequenceConditions = sequenceConditions;
  }

  calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }
    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return (
      this.checkPeriodConditions(screening) ||
      this.checkSequenceConditions(screening)
    );
  }

  private checkPeriodConditions(screening: Screening): boolean {
    return this.periodConditions.some((condition) =>
      condition.isSatisfiedBy(screening)
    );
  }

  private checkSequenceConditions(screening: Screening): boolean {
    return this.sequenceConditions.some((condition) =>
      condition.isSatisfiedBy(screening)
    );
  }

  private calculateDiscountAmount(): Money {
    switch (this.movieType) {
      case MovieType.AMOUNT_DISCOUNT:
        return this.calculateAmountDiscountAmount();
      case MovieType.PERCENT_DISCOUNT:
        return this.calculatePercentDiscountAmount();
      case MovieType.NONE_DISCOUNT:
        return this.calculateNoneDiscountAmount();
      default:
        throw new Error("Invalid movie type");
    }
  }

  private calculateAmountDiscountAmount(): Money {
    return this.discountAmount;
  }

  private calculatePercentDiscountAmount(): Money {
    return this.fee.times(this.discountPercent);
  }

  private calculateNoneDiscountAmount(): Money {
    return Money.ZERO;
  }
}
