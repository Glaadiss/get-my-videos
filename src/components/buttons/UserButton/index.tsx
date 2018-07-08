import * as React from "react";
import Button from "@material-ui/core/Button";
import Account from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

const StyledButton = styled(Button)`
  float: right;
`;

type P = {
  openMenu: (event: any) => void;
  anchorEl?: string;
};

const UserButton = (props: P) => {
  return (
    <StyledButton
      aria-owns={props.anchorEl && "simple-menu"}
      aria-haspopup="true"
      variant="fab"
      color="secondary"
      onClick={props.openMenu}
    >
      <Account />
    </StyledButton>
  );
};

export default UserButton;
