// import { DiscountCondition } from "~src/chapter5/DiscountCondition";
// import { Money } from "~src/chapter5/Money";
// import { Movie } from "~src/chapter5/Movie";

// export class AmountDiscountMovie extends Movie {
//   private discountAmount: Money;

//   constructor(
//     title: string,
//     runningTime: number,
//     fee: Money,
//     discountAmount: Money,
//     ...discountConditions: DiscountCondition[]
//   ) {
//     super(title, runningTime, fee, ...discountConditions);
//     this.discountAmount = discountAmount;
//   }

//   protected calculateDiscountAmount(): Money {
//     return this.discountAmount;
//   }
// }
