const commonButtonStyles = { color: "#ffffff", textTransform: "unset" };

export const styles = {
  modalContainer: { ".MuiPaper-root": { backgroundColor: "#0F0D0D" } },
  container: { height: 1, alignItems: "center", justifyContent: "center" },
  icon: {
    position: "absolute",
    top: "16px",
    right: "16px",
    img: { width: 30 },
  },
  buttonItem: {
    ...commonButtonStyles,
    p: {
      fontSize: "26px",
      fontWeight: 300,
    },
    img: {
      transition: "all 0.3s",
      width: { xs: 30, sm: 40 },
      ["&.open"]: {
        transform: "rotate(-180deg)",
      },
    },
  },
  innerButtonItem: {
    ...commonButtonStyles,
    p: {
      fontSize: "20px",
      fontWeight: 300,
    },
  },
};
