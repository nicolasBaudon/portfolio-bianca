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
    flexDirection: { md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    "&.reverse": {
      flexDirection: { md: "row-reverse" },
    },
    ".text": {
      width: { md: 0.5 },
      fontSize: { xs: 16, md: 18 },
      fontWeight: 300,
    },
    ".gatsby-image-wrapper": { maxWidth: 400 },
  },
};
