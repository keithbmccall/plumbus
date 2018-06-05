import React, { Component, Fragment } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import style from "./SmallCarouselStyle";

const SmallCarouselItem = props => {
  const { item } = props;

  return (
    <View style={style.itemViewContainer}>
      <View style={style.flex6}>
        <Image style={style.carouselImage} source={item.image} />
      </View>

      <View style={style.flex6}>
        <Text style={style.itemPriceText}>{item.lowestPrice}</Text>
        <Text style={style.itemNameText}>
          {item.name.length > 46 ? `${item.name.slice(0, 46)}...` : item.name}
        </Text>
        <Text style={[style.itemText, style.itemSizeText]}>{item.size}</Text>
      </View>
    </View>
  );
};

export default SmallCarouselItem;
