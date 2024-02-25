import { Movie } from "~src/chapter5/Movie";

export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  getMovie(): Movie {
    return this.movie;
  }

  setMovie(movie: Movie): void {
    this.movie = movie;
  }

  getWhenScreened(): Date {
    return this.whenScreened;
  }

  setWhenScreened(whenScreened: Date): void {
    this.whenScreened = whenScreened;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }
}
