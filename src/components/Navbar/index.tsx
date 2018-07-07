import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import SearchInput from "../SearchInput";
import SubmitSearch from "../buttons/SubmitSearch";
import MenuButton from "../buttons/MenuButton";
import styled from "styled-components";
import UserButton from "../buttons/UserButton";

const MenuButtonContainer = styled.div`
  width: 32%;
  @media (max-width: 1279px) {
    width: inherit;
  }
`;
class App extends React.Component {
  public render() {
    return (
      <AppBar>
        <Toolbar>
          <MenuButtonContainer>
            <MenuButton />
          </MenuButtonContainer>
          <div style={{ flexGrow: 3 }}>
            <SearchInput />
          </div>
          <div style={{ flexGrow: 1, marginLeft: "5px" }}>
            <SubmitSearch />
          </div>
          <div style={{ flexGrow: 2 }} />
          <div style={{ flexGrow: 1 }}>
            <UserButton />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default App;
