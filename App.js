/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {Platform,} from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './src/store/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducers, compose(
  // applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

import { createStackNavigator,createAppContainercreateAppContainer} from "react-navigation";
import  AppContainer from './src/router/index'

const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
   'Double tap R on your keyboard to reload,\n' +
   'Shake or press menu button for dev menu',
});

type Props = {};
 class App extends Component<Props> {
   render() {
      return <Provider store={store}><AppContainer/></Provider>;
   }
}

export default App
