import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

const styles = StyleSheet.create({
  serviceContainer: {
    display: "flex",
    flexGrow: 1,
  },
  detailsContainer: {
    margin: 20,
  },
  row: {
    display: "flex",
    //flexDirection: "row",
    paddingBottom: 5,
  },
  key: {
    fontWeight: "bold",
    fontSize: 20,
  },
  value: {
    fontSize: 20,
  },
  contactRow: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 5,
    alignItems: "center"
  },
  contactValue: {
    fontSize: 20,
    marginLeft: 10
  },
  contactIcon: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.darkestCream,
    borderWidth: 2,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
