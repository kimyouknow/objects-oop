// import { DiscountCondition } from "~src/chapter5/DiscountCondition";
// import { Screening } from "./Screening";

// type DayOfWeek =
//   | "MONDAY"
//   | "TUESDAY"
//   | "WEDNESDAY"
//   | "THURSDAY"
//   | "FRIDAY"
//   | "SATURDAY"
//   | "SUNDAY";

// const daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// export class PeriodCondition implements DiscountCondition {
//   private dayOfWeek: DayOfWeek;
//   private startTime: number;
//   private endTime: number;

//   constructor(dayOfWeek: DayOfWeek, startTime: number, endTime: number) {
//     this.dayOfWeek = dayOfWeek;
//     this.startTime = startTime;
//     this.endTime = endTime;
//   }
//   isSatisfiedBy(screening: Screening): boolean {
//     if (!this.dayOfWeek || !this.startTime || !this.endTime) {
//       throw new Error("Missing dayOfWeek, startTime, or endTime");
//     }

//     return (
//       this.dayOfWeek === daysOfWeek[screening.getWhenScreened().getDay()] &&
//       this.startTime <= screening.getWhenScreened().getTime() &&
//       this.endTime >= screening.getWhenScreened().getTime()
//     );
//   }
// }
