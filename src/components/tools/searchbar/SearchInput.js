import React from "react";
import { Text, View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import style from "./SearchInputStyle";
//
const SearchInput = props => {
  const { popMenu } = props;
  return (
    <View style={style.inputContainer}>
      <View style={style.iconContainer}>
        <Ionicons name="ios-search" size={24} color="black" />;
      </View>
      <TextInput
        placeholder="broom, candy, cough syrup, etc..."
        style={style.input}
        keyboardType="default"
        keyboardAppearance="light"
        returnKeyType="search"
        autoCorrect={false}
        onFocus={() => popMenu()}
        onBlur={() => popMenu()}
      />
    </View>
  );
};
export default SearchInput;
