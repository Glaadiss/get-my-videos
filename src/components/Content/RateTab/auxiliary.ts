import { RatingEnum, RateQuery } from "../../../services/gapi/responseTypings";

export type Rate = {
  id: string;
  currentUserLike: RatingEnum;
  target: "like" | "dislike";
};

export function changeToK(num: string): string {
  const intNum = parseInt(num, 10);
  if (!intNum) {
    return "0";
  }
  if (intNum < 10000) {
    return intNum.toString();
  }
  if (intNum < 1000000) {
    const cutNum = intNum / 1000;
    return `${cutNum.toFixed(1)}k`;
  }
  const cutNum = intNum / 1000000;
  return `${cutNum.toFixed(1)}m`;
}

export function changeStatus({ id, currentUserLike, target }: Rate): RateQuery {
  switch (currentUserLike) {
    case "dislike":
      return target === "like"
        ? { id, rating: "like" }
        : { id, rating: "none" };
    case "like":
      return target === "dislike"
        ? { id, rating: "dislike" }
        : { id, rating: "none" };
    default:
      return { id, rating: target };
  }
}
