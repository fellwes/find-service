import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightCream,
    flexDirection: "column",
    flexGrow: 1,
  },
  headerTextStyle: {
    marginTop: 12,
    marginLeft: 24,
    marginRight: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.darkestCream,
    textAlign: "center",
  },
  contentStyle: {
    marginTop: 24,
    flex: 1,
  },

  footerTextStyle: {
    margin: 24,
    marginTop: 12,
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default globalStyles;
