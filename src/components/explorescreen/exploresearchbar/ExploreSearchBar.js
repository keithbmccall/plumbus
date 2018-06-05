import React, { Component, Fragment } from "react";
import { View, TextInput, ScrollView, Dimensions } from "react-native";
import SearchInput from "../../tools/searchbar/SearchInput";
//
import style from "./ExploreSearchBarStyle";
//
const { width, height } = Dimensions.get("window");
//
const SearchBar = props => {
  const { popExploreMenu } = props;

  return (
    <Fragment>
      <View style={style.container}>
        <SearchInput popMenu={popExploreMenu} />
        {props.children}
      </View>
    </Fragment>
  );
};

export default SearchBar;
