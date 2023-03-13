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
    ul: {
      m: 0,
      listStyleType: "none",
      p: 0,
      li: {
        '&:not(:first-child)': {
          mt: 2,
        },
        display: "flex",
        alignItems: { xs: "start", md: "center" },
        gap: 1,
        fontSize: { xs: 16, md: 20 },
        fontWeight: 300,
        img: { width: 24 },
      },
    },
    p: {
      fontSize: { xs: 16, md: 18 },
      fontWeight: 300,
    },
  },
  imagesContainer: {
    mt: 4,
    width: 1,
    flexDirection: { md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    ".gatsby-image-wrapper": { width: { xs: 1, md: 300 } },
  },
};
