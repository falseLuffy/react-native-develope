import React, {Component} from 'react'
import {Dimensions, StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView} from 'react-native'
import {createStackNavigator, createAppContainer,withNavigation} from 'react-navigation';

class FlexBox extends Component{
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

export default withNavigation(FlexBox)

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