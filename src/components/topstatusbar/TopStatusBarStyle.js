import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";
import { brandingColors } from "../../assets/branding";

const { width, height } = Dimensions.get("window");
//
//checks if iPhone X by size
let statusHeight;
height === 812 ? (statusHeight = 40) : (statusHeight = 20);
//
export default StyleSheet.create({
  statusPadding: {
    height: statusHeight,
    backgroundColor: brandingColors.primary
  }
});
