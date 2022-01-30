import { RefObject } from "react";

export const scrollToRef = (ref: RefObject<any>) =>
  ref.current &&
  ref.current.scrollIntoView({
    behavior: "smooth",
  });
