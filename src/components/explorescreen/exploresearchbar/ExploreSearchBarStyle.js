import { StyleSheet } from "react-native";
import { brandingColors } from "../../../assets/branding";

export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: brandingColors.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    paddingBottom: "2%"
  }
});
