import React, {Component} from 'react'
import {withNavigation} from 'react-navigation';
import {View,Text} from 'react-native'

class Details extends Component {
   render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
           <Text>DetailsScreen</Text>
        </View>
      );
   }
}

export default withNavigation(Details);