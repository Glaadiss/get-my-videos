import * as React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"


class App extends React.Component {
  public render() {
    return (
      <div >
        <Navbar />
        <Sidebar />
        Text
      </div>
    );
  }
}

export default App;
