import React, { Component, Fragment } from "react";
import { Text, View, ScrollView } from "react-native";
import style from "./SmallCarouselStyle";
//
import SmallCarouselItem from "./SmallCarouselItem";

const SmallBoxCarousel = props => {
  const renderCarouselItems = (item, key) => (
    <SmallCarouselItem key={key} item={item} />
  );

  const { categoryHeadline, categories } = props.data;
  const carouselItems = categories.map(renderCarouselItems);
  return (
    <View style={style.container}>
      <Text style={style.titleText}>{categoryHeadline}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.scrollContainer}>{carouselItems}</View>
      </ScrollView>
    </View>
  );
};

export default SmallBoxCarousel;
