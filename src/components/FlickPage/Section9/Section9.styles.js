export const styles = {
  container: {
    maxWidth: 1350,
    mx: "auto",
    gap: 4,
    mt: 16,
    px: { xs: 2, md: 6 },
    h3: {
      fontSize: { xs: 20, md: 24 },
      fontWeight: 300,
      m: 0,
    },
    p: {
      fontSize: { xs: 16, md: 18 },
      fontWeight: 300,
    },
  },
  contentContainer: {
    flexDirection: { md: "row" },
    gap: 2,
  },
  imagesContainer: {
    mt: 4,
    width: 1,
    flexDirection: { md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: 2, md: 4 },
    ".gatsby-image-wrapper": { width: { xs: 1, md: 500 } },
  },
};
