import { Theme, createStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import green from "@material-ui/core/colors/green";

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      border: "4px solid white"
    },
    buttonPicked: {
      margin: theme.spacing.unit,
      border: "4px solid green"
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    },
    colorInherit: {
      margin: "5px",
      color: "#fff",
      textOverflow: "ellipsis",
      whiteSpace: "pre-line",
      overflow: "hidden"
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -150,
      [theme.breakpoints.down("sm")]: {
        marginLeft: -40
      }
    }
  });

export const Container = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RContainer = styled.div`
  justify-content: flex-end;
  text-align: right;
  position: relative;
`;
export const LContainer = styled.div`
  color: "#fff";
`;
