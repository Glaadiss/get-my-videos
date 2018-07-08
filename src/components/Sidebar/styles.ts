import { Theme, createStyles } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
        borderRadius: "0",
        backgroundColor: theme.palette.primary.light
      },
      "&::-webkit-scrollbar": {
        width: "12px",
        borderRadius: "0",
        backgroundColor: theme.palette.primary.light
      },
      "&::-webkit-scrollbar-thumb": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3);",
        borderRadius: "5px",
        backgroundColor: theme.palette.secondary.light
      },
      boxShadow: "2px 2px 2px 2px #666",
      width: "32%",
      zIndex: 11,
      top: "80px",
      paddingBottom: "72px",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    drawerPaperClosed: {
      width: 0
    },
    paddingList: {
      paddingBottom: "108px"
    }
  });
