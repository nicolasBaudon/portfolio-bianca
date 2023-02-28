export const styles = {
  container: {
    mt: { xs: 4, md: 8 },
    "> img": {
      width: 1,
      height: { xs: 200, md: 300 },
      objectFit: "cover",
    },
  },
  contentContainer: {
    gap: 1,
    px: { xs: 2, md: 6 },
    mb: 6,
    h1: {
      fontSize: { xs: 40, md: 50 },
      fontWeight: 300,
      m: 0,
    },
    h2: {
      fontSize: { xs: 20, md: 24 },
      fontWeight: 300,
      mb: 0,
      mt: 2,
    },
  },
  row: {
    flexDirection: { md: "row" },
    gap: 2,
    "> div": {
      width: { md: 0.5 },
    },
    h3: {
      fontSize: { xs: 18, md: 20 },
      fontWeight: 500,
    },
    p: {
      fontSize: 16,
      fontWeight: 300,
      span: { display: "block", marginBottom: 12 },
    },
  },
};
