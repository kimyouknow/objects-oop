import { Screening } from "~src/chapter5/Screening";

export interface DiscountCondition {
  isSatisfiedBy(screening: Screening): boolean;
}
