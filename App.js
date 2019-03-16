/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, ScrollView, SafeAreaView, Dimensions} from 'react-native';

import FlexBox from './src/components/flexBox'

const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
   'Double tap R on your keyboard to reload,\n' +
   'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
   render() {
      return (
        <SafeAreaView style={styles.container}>
           <View style={styles.container} key={1}>
              <FlexBox></FlexBox>
           </View>
        </SafeAreaView>
      );
   }
}

let MainWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: MainWidth,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 11,
      margin: 10,
   },

   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
   scroll: {
      width: "100%"
   }
});
