import { theme } from "../../../utils/theme";

export const styles = {
  container: {
    flexDirection: "row",
    p: "60px",
    justifyContent: "space-between",
    gap: "32px",
    img: {
      width: 670,
      [theme.breakpoints.down("md")]: {
        width: 1,
      },
    },
    [theme.breakpoints.down("md")]: {
      px: "16px",
      gap: "80px",
      flexDirection: "column",
    },
  },
  textContainer: {
    "h1, h2": { margin: 0 },
    h1: {
      fontWeight: 600,
      fontSize: "32px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px",
      },
    },
    h2: {
      fontWeight: 300,
      fontSize: "24px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
  },
};
