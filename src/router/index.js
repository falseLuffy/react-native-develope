import React ,{Component}from "react";
import { createStackNavigator,createAppContainer} from "react-navigation";

import {View, Text} from 'react-native'

import FlexBox from '../components/flexBox'


class HomeScreen extends Component{
   render(){
      return (
        <FlexBox></FlexBox>
      )
   }
}
class DetailsScreen extends Component {
   render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
           <Text>DetailsScreen</Text>
        </View>
      );
   }
}

const AppNavigator = createStackNavigator({
   Home: HomeScreen,
   Details:DetailsScreen
},
  {
     initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator)