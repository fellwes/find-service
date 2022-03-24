import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

const addServiceStyles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    color: "black",
    backgroundColor: COLORS.darkestCream,
    marginBottom: 10,
    fontSize: 20,
  },
  disabled: {
    opacity: 0.2
  },
  formContainer: {
    margin: 10,
    flexGrow: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  button: {
    height: 50,
    width: 150,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: COLORS.cream,
  },
});

export default addServiceStyles;
