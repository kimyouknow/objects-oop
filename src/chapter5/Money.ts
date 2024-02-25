export class Money {
  static readonly ZERO: Money = new Money(0);

  private readonly amount: number;

  private constructor(amount: number) {
    this.amount = amount;
  }

  static wons(amount: number): Money {
    return new Money(amount);
  }

  plus(amount: Money): Money {
    return new Money(this.amount + amount.amount);
  }

  minus(amount: Money): Money {
    return new Money(this.amount - amount.amount);
  }

  times(percent: number): Money {
    return new Money(this.amount * percent);
  }

  isLessThan(other: Money): boolean {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money): boolean {
    return this.amount >= other.amount;
  }

  equals(object: any): boolean {
    if (this === object) {
      return true;
    }

    if (!(object instanceof Money)) {
      return false;
    }

    const other: Money = object;
    return this.amount === other.amount;
  }

  toString(): string {
    return this.amount.toString() + "원";
  }
}
