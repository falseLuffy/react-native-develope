import React, {Component} from 'react'
import {Dimensions, StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class  extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
        <View style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           backgroundColor: "darkgray",
           marginTop: 20,
           flexWrap: 'wrap'
        }}>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>1</Text>
           </View>
           <View>
              <Button title="Go to Details" onPress={() => {
                 this.props.navigation.navigate('Details')
              }}></Button>
           </View>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>2</Text>
           </View>
        </View>
      )
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