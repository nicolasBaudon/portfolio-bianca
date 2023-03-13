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
  },
  row: {
    flexDirection: { md: "row" },
    justifyContent: "space-between",
    gap: 4,
    listContainer: {
      width: { md: 0.5 },
      ".text": {
        fontSize: { xs: 16, md: 18 },
        fontWeight: 300,
      },
      ul: { listStyleType: "none", padding: 0 },
    },
    ".gatsby-image-wrapper": { maxWidth: 400 },
  },
};
