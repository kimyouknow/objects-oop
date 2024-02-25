import { Customer } from "~src/chapter5/Customer";
import { Money } from "~src/chapter5/Money";
import { Movie } from "~src/chapter5/Movie";
import { MovieType } from "~src/chapter5/MovieType";
import { Reservation } from "~src/chapter5/Reservation";
import { Screening } from "~src/chapter5/Screening";

export class ReservationAgency {
  reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number
  ): Reservation {
    const discountable: boolean = this.checkDiscountable(screening);
    const fee: Money = this.calculateFee(
      screening,
      discountable,
      audienceCount
    );
    return this.createReservation(screening, customer, audienceCount, fee);
  }

  private checkDiscountable(screening: Screening): boolean {
    return screening
      .getMovie()
      .getDiscountConditions()
      .some((condition) => condition.isDiscountable(screening));
  }

  private calculateFee(
    screening: Screening,
    discountable: boolean,
    audienceCount: number
  ): Money {
    if (discountable) {
      return screening
        .getMovie()
        .getFee()
        .minus(this.calculateDiscountedFee(screening.getMovie()))
        .times(audienceCount);
    }

    return screening.getMovie().getFee();
  }

  private calculateDiscountedFee(movie: Movie): Money {
    switch (movie.getMovieType()) {
      case MovieType.AMOUNT_DISCOUNT:
        return this.calculateAmountDiscountedFee(movie);
      case MovieType.PERCENT_DISCOUNT:
        return this.calculatePercentDiscountedFee(movie);
      case MovieType.NONE_DISCOUNT:
        return this.calculateNoneDiscountedFee(movie);
      default:
        throw new Error("Invalid movie type");
    }
  }

  private calculateAmountDiscountedFee(movie: Movie): Money {
    return movie.getDiscountAmount();
  }

  private calculatePercentDiscountedFee(movie: Movie): Money {
    return movie.getFee().times(movie.getDiscountPercent());
  }

  private calculateNoneDiscountedFee(movie: Movie): Money {
    return movie.getFee();
  }

  private createReservation(
    screening: Screening,
    customer: Customer,
    audienceCount: number,
    fee: Money
  ): Reservation {
    return new Reservation(customer, screening, fee, audienceCount);
  }
}
