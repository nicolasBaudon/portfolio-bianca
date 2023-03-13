const black = "#000000";
const white = "#ffffff";

export const getStyles = (isDark) => ({
  rootContainer: {
    backgroundColor: isDark ? black : "initial",
    color: isDark ? white : black,
  },
  container: {
    maxWidth: 1350,
    mx: "auto",
    flexDirection: { xs: "column", md: isDark ? "row-reverse" : "row" },
    gap: 4,
    py: 10,
    px: { xs: 2, md: 6 },
    my: { xs: 6, sm: 10 },
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: { md: 700 },
    img: {
      width: { xs: 1, md: 450 },
    },
  },
  contentContainer: {
    maxWidth: 600,
    gap: 2,
    h4: { fontSize: { xs: 26, sm: 32 }, fontWeight: 300, m: 0 },
    h5: { fontSize: { xs: 18, sm: 24 }, fontWeight: 500, m: 0 },
    p: { fontSize: { xs: 16, sm: 20 }, fontWeight: 300, m: 0 },
    button: {
      width: "max-content",
      px: 4,
      mt: 2,
      textTransform: "lowercase",
      backgroundColor: isDark ? white : black,
      color: isDark ? black : white,
      borderRadius: 32,
      fontSize: 16,
      "&:hover": {
        backgroundColor: isDark ? white : black,
      },
    },
  },
});
