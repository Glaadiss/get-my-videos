import { Theme, createStyles } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 2,
      position: "relative",
      height: "fit-content",
      padding: "15px",
      [theme.breakpoints.down("xs")]: {
        paddingRight: "2px"
      }
    },
    suggestionsContainerOpen: {
      position: "absolute",
      zIndex: 10,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    suggestion: {
      display: "block"
    },
    input: {
      color: "#fff",
      fontSize: "x-large",
      [theme.breakpoints.down("xs")]: {
        fontSize: "x-small"
      }
    },
    root: {
      color: "#fff"
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: "none"
    }
  });
