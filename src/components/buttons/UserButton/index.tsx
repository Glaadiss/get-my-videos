import * as React from "react";
import Button from "@material-ui/core/Button";
import Account from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

const StyledButton = styled(Button)`
  float: right;
`;

const UserButton = () => {
  return (
    <StyledButton variant="fab" color="secondary">
      <Account />
    </StyledButton>
  );
};

export default UserButton;
