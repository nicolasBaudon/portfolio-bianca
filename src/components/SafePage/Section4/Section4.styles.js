export const styles = {
  container: {
    maxWidth: 1350,
    mx: "auto",
    gap: 4,
    mt: 16,
    px: { xs: 2, md: 6 },
    ul: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      listStyleType: "none",
      p: 0,
      li: {
        display: "flex",
        gap: 2,
        img: { width: 24 },
        fontSize: 16,
        fontWeight: 300,
      },
    },
  },
  row: {
    px: { md: 8 },
    flexDirection: { md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    h3: {
      width: {xs: 1, md: 0.6},
      fontSize: 18,
      fontWeight: 600,
      m: 0,
    },
    ".gatsby-image-wrapper": { maxWidth: 260 },
  },
};
