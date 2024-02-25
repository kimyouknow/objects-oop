import { DiscountCondition } from "~src/chapter5/DiscountCondition";
import { Money } from "~src/chapter5/Money";
import { MovieType } from "~src/chapter5/MovieType";

export class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountConditions: DiscountCondition[];
  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;

  getMovieType(): MovieType {
    return this.movieType;
  }

  setMovieType(movieType: MovieType) {
    this.movieType = movieType;
  }

  getFee(): Money {
    return this.fee;
  }

  setFee(fee: Money) {
    this.fee = fee;
  }

  getDiscountConditions() {
    return Object.freeze(this.discountConditions.slice());
  }

  setDiscountConditions(discountConditions: DiscountCondition[]) {
    this.discountConditions = discountConditions;
  }

  getDiscountAmount(): Money {
    return this.discountAmount;
  }

  setDiscountAmount(discountAmount: Money) {
    this.discountAmount = discountAmount;
  }

  getDiscountPercent(): number {
    return this.discountPercent;
  }

  setDiscountPercent(discountPercent: number) {
    this.discountPercent = discountPercent;
  }
}
