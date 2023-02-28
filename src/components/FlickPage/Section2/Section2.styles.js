export const styles = {
  container: {
    gap: 2,
    mt: 16,
    px: { xs: 2, md: 6 },
    h3: {
      fontSize: { xs: 20, md: 24 },
      fontWeight: 300,
      m: 0,
    },
    p: { fontSize: { xs: 16, md: 18 }, fontWeight: 300 },
  },
  imagesContainer: {
    mt: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: { xs: "start", md: "center" },
    gap: 4,
    whiteSpace: "nowrap",
    overflowX: "auto",
    ".gatsby-image-wrapper": { width: 260, minWidth: { xs: 260, md: "unset" } },
    ".gatsby-image-wrapper:nth-child(2)": { width: { xs: 260, md: 300 } },
  },
};
