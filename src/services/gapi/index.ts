import { RootObject } from "./responseTypings";
import { VideoQuery } from "../actions/videos";
const API_KEY = "AIzaSyCHD4aCb2iHf-8vcx9lbN71RisTtBYxit0";
const CLIENT_ID =
  "650362998502-hgepbavbsu927vv11gnm0pt7ohfjpr1g.apps.googleusercontent.com";

function loadYoutubeApi(i = 0) {
  return new Promise((resolve, reject) => {
    const { gapi } = window as any;
    if (i === 5) {
      reject("Can't fetch google library!");
    }
    if (gapi === undefined || gapi.client === undefined) {
      return resolve(
        setTimeout(() => {
          loadYoutubeApi(i + 1);
        }, 200)
      );
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

function getVideos({ q, maxResults = 10 }: VideoQuery) {
  const { gapi } = window as any;
  return new Promise((resolve, reject) => {
    const request = gapi.client.youtube.search.list({
      q,
      part: "snippet",
      maxResults
    });
    request.execute((response: RootObject) => {
      resolve(response);
    });
  });
}

function signIn() {
  getAuthInstance().signIn();
}

function signOut() {
  getAuthInstance().signOut();
}

function signInListen(cb: () => void) {
  getAuthInstance().isSignedIn.listen(() => cb());
}

function getAuthInstance() {
  const { gapi } = window as any;
  const GoogleAuth = gapi.auth2.getAuthInstance();
  return GoogleAuth;
}

export { loadYoutubeApi, getVideos, signIn, signOut, signInListen };
