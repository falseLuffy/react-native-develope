import React, {Component} from 'react'
import {withNavigation} from 'react-navigation';
import {View,Text,Button} from 'react-native'

class Details extends Component {
   render() {
      let {navigation} = this.props;
      let {state,setParams} = navigation;
      let {params} = state;

      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
           <Text>DetailsScreen</Text>
           <Text>{params.name}</Text>
           <Button title={'点一下1'}></Button>
        </View>
      );
   }
}

export default withNavigation(Details);