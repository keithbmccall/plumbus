import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//
import rootReducer from "./src/store/reducers/index";
import { Router } from "./src/router/Router";
import TopStatusBar from "./src/components/topstatusbar/TopStatusBar";
//
console.disableYellowBox = true;
//
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <TopStatusBar />
          <Router />
        </Fragment>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
