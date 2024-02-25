import { Screening } from "~src/chapter5/Screening";

export class SequenceCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return this.sequence === screening.getSequence();
  }
}
