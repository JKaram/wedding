export const dinnerOptions = ["Fish", "Meat", "Vegies"] as const;

type DinnerOptions = typeof dinnerOptions[number];
