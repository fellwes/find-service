import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

const styles = StyleSheet.create({
  container: { display: "flex" },
  searchBar: { display: "flex", flexDirection: "row" },
  searchInput: {
    fontSize: 20,
    height: 40,
    flexGrow: 1,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    color: "black",
    backgroundColor: COLORS.darkestCream,
  },
  filters: {
    maxHeight: 400,
    width: "100%",
    backgroundColor: COLORS.darkestCream,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
  },
  filterIcon: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.darkestCream,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  filtersHeader: {
    fontSize: 24,
  },
  filtersProperty: {
    fontSize: 18,
    marginLeft: 5
  },
  line: { height: 1, backgroundColor: "black", marginVertical: 10 },
});

export default styles;
