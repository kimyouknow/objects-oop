export const DiscountConditionType = {
  SEQUENCE: "SEQUENCE",
  PERIOD: "PERIOD",
} as const;

export type DiscountConditionType =
  (typeof DiscountConditionType)[keyof typeof DiscountConditionType];
