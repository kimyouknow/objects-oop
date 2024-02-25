import { Customer } from "~src/chapter5/Customer";
import { Money } from "~src/chapter5/Money";
import { Screening } from "~src/chapter5/Screening";

export class Reservation {
  private customer: Customer;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(
    customer: Customer,
    screening: Screening,
    fee: Money,
    audienceCount: number
  ) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }
}
