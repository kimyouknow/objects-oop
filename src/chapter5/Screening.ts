import { Customer } from "~src/chapter5/Customer";
import { Money } from "~src/chapter5/Money";
import { Movie } from "~src/chapter5/Movie";
import { Reservation } from "~src/chapter5/Reservation";

// 영화를 예매할 책임,
// revervation 인스턴스를 생성할 책임
export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }

  private calculateFee(audienceCount: number): Money {
    // NOTE(p.147) Sheening이 Movie의 내부 구현에 대한 어떤 지식도 없이 전송할 메시지를 결정했다.
    // 메시지가 객체를 선택할 수 있도록 책임 주도 설꼐 방식을 따르면 캡슐화와 낮은 결합도라는 목표를 비교적 손쉽게 달성할 수 있다.
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }

  getWhenScreened(): Date {
    return this.whenScreened;
  }

  getSequence(): number {
    return this.sequence;
  }
}
