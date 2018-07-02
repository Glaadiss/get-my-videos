import * as React from "react";

import Navbar from "./Navbar";
import { Provider } from "react-redux";
import Sidebar from "./Sidebar";
import { store } from "../services/store";
import Content from "./Content";
// import { loadYoutubeApi, getVideos } from "../services/gapi";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Sidebar />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;
