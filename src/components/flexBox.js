import React, {Component} from 'react'
import {Dimensions, StyleSheet, Text, View, Button} from 'react-native'
import {createStackNavigator, createAppContainer,withNavigation} from 'react-navigation';

class FlexBox extends Component{
   render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           backgroundColor: "darkgray",
           flexWrap: 'wrap'
        }}>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>1</Text>
           </View>
           <View>
              <Button title="Go to Details1"  color="#841584"
                      onPress={() => {navigate('Details',{name:'hello'})}}></Button>
           </View>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>2</Text>
           </View>
           <Button title="Go to Details1"  color="#841584" style={styles.button}
                   onPress={() => {navigate('Details',{name:'hello'})}}></Button>
        </View>
      )
   }
}

export default withNavigation(FlexBox)

let MainWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   button:{
      backgroundColor:'#1a0a01'
   }
});