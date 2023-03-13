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
    h4: {
      fontSize: { xs: 18, md: 20 },
      fontWeight: 500,
      m: 0,
    },
    p: {
      fontSize: { xs: 14, md: 16 },
      fontWeight: 300,
    },
  },
  imagesContainer: {
    flexDirection: { md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    ".gatsby-image-wrapper": { maxWidth: { md: 0.5 } },
  },
};
