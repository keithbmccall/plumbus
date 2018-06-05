import React, { Component, Fragment } from "react";
import { Text, View, ScrollView } from "react-native";
import ExploreSearchBar from "../../components/explorescreen/exploresearchbar/ExploreSearchBar";
import ExploreMenuView from "../../components/explorescreen/exploremenu/ExploreMenuView";
import SmallBoxCarousel from "../../components/tools/smallcarousels/SmallBoxCarousel";
import ItemCarousel from "../../components/tools/smallcarousels/ItemCarousel";
//
import { explore, trendingItems } from "../../data/data";
//
export default class ExploreScreen extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }
  popExploreMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };
  render() {
    const menu = this.state.menuOpen ? <ExploreMenuView /> : null;

    return (
      <Fragment>
        <ExploreSearchBar popExploreMenu={this.popExploreMenu}>
          {menu}
        </ExploreSearchBar>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <SmallBoxCarousel data={explore} />
            <ItemCarousel data={trendingItems} />
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
