export const styles = {
  container: {
    maxWidth: 1350,
    mx: "auto",
    gap: 4,
    my: 16,
    px: { xs: 2, md: 6 },
    alignItems: 'center',
    ".gatsby-image-wrapper": { width: { xs: 100, md: 200 } },
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 2,
    button: {
      width: "max-content",
      px: 4,
      mt: 2,
      textTransform: "lowercase",
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: 32,
      fontSize: 16,
      "&.MuiButton-outlined": {
        backgroundColor: "transparent",
        borderColor: "#000",
        color: "#000",
        "&:hover": {
          backgroundColor: 'transparent',
        },
      },
      "&:hover": {
        backgroundColor: "#000",
      },
    },
  },
};
