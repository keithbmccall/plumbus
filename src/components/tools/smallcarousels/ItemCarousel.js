import React, { Component, Fragment } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import style from "./SmallCarouselStyle";
//
import ItemCarouselItem from "./ItemCarouselItem";

const ItemCarousel = props => {
  const renderCarouselItems = (item, key) => (
    <ItemCarouselItem key={key} item={item} />
  );
  const { headline, items } = props.data;
  const carouselItems = items.map(renderCarouselItems);
  return (
    <View style={style.container}>
      <Text style={style.titleText}>{headline}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.scrollContainer}>{carouselItems}</View>
      </ScrollView>
    </View>
  );
};

export default ItemCarousel;
