export const MovieType = {
  AMOUNT_DISCOUNT: "AMOUNT_DISCOUNT",
  PERCENT_DISCOUNT: "PERCENT_DISCOUNT",
  NONE_DISCOUNT: "NONE_DISCOUNT",
} as const;

export type MovieType = (typeof MovieType)[keyof typeof MovieType];
