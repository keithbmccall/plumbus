import React, { Component, Fragment } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import style from "./SmallCarouselStyle";

const SmallCarouselItem = props => {
  const { item } = props;

  return (
    <View style={style.smallBoxView}>
      <View style={style.smallCarouselImageContainer}>
        <Image source={item.image} style={style.carouselImage} />
      </View>
      <View style={style.categoryContainer}>
        <Text style={style.itemText}>{item.title}</Text>
      </View>
    </View>
  );
};

export default SmallCarouselItem;
