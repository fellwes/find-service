import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.darkestCream,
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    borderColor: "black",
    borderWidth: 2,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 5,
  },
  key: {
    fontWeight: "bold",
    fontSize: 20,
  },
  value: {
    fontSize: 20,
  },
});

export default styles;
