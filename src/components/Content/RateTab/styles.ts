import { Theme, createStyles } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      float: "right",
      border: "4px solid white"
    },
    buttonPicked: {
      margin: theme.spacing.unit,
      float: "right",
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
    }
  });
