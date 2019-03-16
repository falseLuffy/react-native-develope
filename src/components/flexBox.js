import React, {Component} from 'react'
import {StyleSheet,Text, View} from 'react-native'

export default class  extends Component <Props> {
   render() {
      return (
        <View style={{flexDirection: 'row',justifyContent:'space-between', backgroundColor: "darkgray", marginTop: 20,flexWrap:'wrap'}}>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>1</Text>
           </View>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>2</Text>
           </View>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>3</Text>
           </View>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>4</Text>
           </View>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>4</Text>
           </View>
           <View style={{width: 100, height: 40, backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>4</Text>
           </View>
           <View style={{width: 100, height: 40,alignSelf:'flex-end', backgroundColor: "darkcyan", margin: 5}}>
              <Text style={{fontSize: 16}}>4</Text>
           </View>
        </View>
      )
   }
}

StyleSheet.create({

})