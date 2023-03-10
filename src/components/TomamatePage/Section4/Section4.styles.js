export const styles = {
  rootContainer: {
    backgroundColor: "#000",
    color: "#fff",
    mt: 16,
  },
  container: {
    maxWidth: 1350,
    mx: "auto",
    flexDirection: { md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    py: 12,
    px: { xs: 2, md: 6 },
    [".text"]: {
      width: { xs: 1, md: 0.5 },
      fontSize: { xs: 16, md: 22 },
      fontWeight: 300,
    },
    ".gatsby-image-wrapper": { maxWidth: 360 },
  },
};
