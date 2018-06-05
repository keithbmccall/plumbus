import React, { Fragment } from "react";
import { View, StatusBar } from "react-native";
import style from "./TopStatusBarStyle";

const TopStatusBar = props => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" hidden={false} />
      <View style={style.statusPadding} />
    </Fragment>
  );
};

export default TopStatusBar;
