import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  titleText: {
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 10
  },
  itemText: {
    fontSize: 12
  },
  scrollContainer: {
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5
  },
  smallBoxView: {
    borderRadius: 5,
    borderColor: "rgba(30,30,30,0.5)",
    borderWidth: 0.75,
    backgroundColor: "white",
    width: 130,
    height: 100,
    marginBottom: 5,
    marginLeft: 7,
    marginRight: 7,
    shadowColor: "#000",
    shadowOffset: { width: 1.5, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5
  },
  smallCarouselImageContainer: {
    flex: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  carouselImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover"
  },
  categoryContainer: {
    flex: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    paddingLeft: 5
  },
  //
  itemPriceText: {
    fontSize: 20,
    fontWeight: "800"
  },
  itemNameText: {
    fontSize: 14
  },
  itemSizeText: {
    color: "#333"
  },
  itemViewContainer: {
    backgroundColor: "white",
    width: 150,
    height: 275,
    marginLeft: 7,
    marginRight: 7
  },
  flex6: {
    flex: 6
  }
});
