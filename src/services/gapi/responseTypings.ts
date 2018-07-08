export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

export interface RootObject {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface AdjustedItem {
  id: string;
  publishedAt: Date;
  description: string;
  thumbnail: string;
  title: string;
}

export interface Suggestion {
  id: string;
  title: string;
}

export type RatingEnum = "like" | "dislike" | "none";

export interface RateQuery {
  id: string;
  rating: RatingEnum;
}

export interface RatingItem {
  videoId: string;
  rating: string;
}

export interface RatingObject {
  kind: string;
  etag: string;
  items: RatingItem[];
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface DetailItem {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}

export interface AdjustemDetailItem {
  id: string;
  publishedAt: Date;
  description: string;
  thumbnail: string;
  title: string;
  statistics: Statistics;
}

export interface DetailObject {
  kind: string;
  etag: string;
  items: DetailItem[];
}
