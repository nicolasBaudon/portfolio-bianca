export const styles = {
  container: {
    maxWidth: 1350,
    mx: "auto",
    gap: 8,
    mt: 16,
    px: { xs: 2, md: 6 },
    h3: {
      fontSize: { xs: 20, md: 24 },
      fontWeight: 300,
      m: 0,
    },
  },
  row: {
    flexDirection: { xs: "column-reverse", md: "row" },
    alignItems: "center",
    gap: 4,
    listContainer: {
      width: { md: 0.7 },
      gap: 2,
      ".text": {
        fontSize: { xs: 16, md: 18 },
        fontWeight: 300,
      },
    },
    ".gatsby-image-wrapper": { maxWidth: 400 },
  },
};
