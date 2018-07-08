import {
  RootObject,
  RateQuery,
  RatingObject,
  DetailObject
} from "./responseTypings";
import { VideoQuery } from "../actions/videos";
const API_KEY = "AIzaSyCHD4aCb2iHf-8vcx9lbN71RisTtBYxit0";
const CLIENT_ID =
  "650362998502-hgepbavbsu927vv11gnm0pt7ohfjpr1g.apps.googleusercontent.com";

function loadYoutubeApi(): any {
  return new Promise((resolve, reject) => {
    const { gapi } = window as any;
    const cantLoad = () => gapi === undefined || gapi.client === undefined;
    if (cantLoad()) {
      reject("Can't fetch google library!");
    }

    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/youtube.force-ssl",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
        ]
      })
      .then(() => {
        resolve();
      });
  });
}

function getVideos({ q, maxResults = 15 }: VideoQuery) {
  return new Promise((resolve, reject) => {
    const request = requestObj().youtube.search.list({
      q,
      part: "snippet",
      maxResults
    });
    request.execute((response: RootObject) => {
      const items =
        response &&
        response.items &&
        response.items.filter(item => item.id && item.id.videoId);
      items
        ? resolve({ ...response, items })
        : reject("Can't fetch videos from gapi");
    });
  });
}

function getDetails({ id }: { id: string }) {
  return new Promise((resolve, reject) => {
    const request = requestObj().youtube.list({
      id,
      part: "snippet,statistics"
    });
    request.execute((response: DetailObject) => {
      const items = response && response.items;
      items ? resolve(response) : reject("Can't fetch details from gapi");
    });
  });
}

function rate({ id, rating }: RateQuery) {
  return new Promise((resolve, reject) => {
    const request = requestObj().youtube.videos.rate({
      id,
      rating
    });
    request.execute(
      () => {
        resolve({ id, rating });
      },
      () => reject("Can't do rate activity")
    );
  });
}

function getRating({ id }: { id: string }) {
  return new Promise((resolve, reject) => {
    const request = requestObj().youtube.videos.getRating({
      id,
      onBehalfOfContentOwner: ""
    });
    request.execute((response: RatingObject) => {
      const items = response && response.items;
      items ? resolve(response) : reject("Can't get rating for video");
    });
  });
}

function signIn() {
  getAuthInstance().signIn();
}

function signOut() {
  getAuthInstance().signOut();
}

function signInListen(cb: (data: any) => void) {
  getAuthInstance().isSignedIn.listen((data: any) => cb(data));
}

function requestObj() {
  const { gapi } = window as any;
  return gapi.client;
}

function getAuthInstance() {
  const { gapi } = window as any;
  const GoogleAuth = gapi.auth2.getAuthInstance();
  return GoogleAuth;
}

export {
  loadYoutubeApi,
  getVideos,
  signIn,
  signOut,
  signInListen,
  getRating,
  rate,
  getDetails
};
