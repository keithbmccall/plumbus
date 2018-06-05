import React, { Component, Fragment } from "react";
import { Animated, Dimensions, KeyboardAvoidingView } from "react-native";
//
import ExploreMenuContent from "./ExploreMenuContent";
//
import style from "./ExploreMenuStyle";
//
const { height } = Dimensions.get("window");
//
class ExploreMenuView extends Component {
  state = {
    openMenu: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.spring(this.state.openMenu, {
      toValue: height,
      speed: 4
    }).start();
  }

  render() {
    let { openMenu } = this.state;

    return (
      <Animated.ScrollView style={[style.exploreMenu, { height: openMenu }]}>
        <KeyboardAvoidingView>
          <ExploreMenuContent content={this.props.exploreContent} />
        </KeyboardAvoidingView>
      </Animated.ScrollView>
    );
  }
}
export default ExploreMenuView;
