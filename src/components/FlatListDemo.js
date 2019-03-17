import React, {Component} from 'react'
import {withNavigation} from 'react-navigation';
import {
   View, Text, FlatList, StyleSheet,RefreshControl
} from 'react-native'

const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉']

class FlatListDemo extends Component {
   constructor(props){
      super(props);
      this.state = {
         isLoading:false,
         dataArray:CITY_NAMES
      }
   }
   _renderItem({item,index}) {
      return (
        <View style={styles.item} key={'item'+index}>
           <Text style={styles.text}>{item}</Text>
        </View>
      )
   }
   loadData(){
      this.setState({
         isLoading:true,
      })
      setTimeout(()=>{
         let dataArray  = [];
         for(let i=this.state.dataArray.length-1;i>=0;i--){
            dataArray.push(this.state.dataArray[i]);
         }
         console.log(dataArray)
         this.setState({
            dataArray:dataArray,
            isLoading:false
         })
      },2000)
   }

   render() {
      return (
        <View style={styles.container}>
           <FlatList data={this.state.dataArray}
                     renderItem={(data) => this._renderItem(data)}
                     refreshControl = {
                        <RefreshControl
                          title={'Loading'}
                          tintColor={['orange']}
                          titleColor={'red'}
                          refreshing={this.state.isLoading}
                          onRefresh={()=>{
                             this.loadData()
                          }}
                        ></RefreshControl>
                     }
           ></FlatList>
        </View>
      )
   }
}

export default withNavigation(FlatListDemo);

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   item:{
      backgroundColor:'#168',
      height:80,
      marginRight:8,
      marginLeft:8,
      marginBottom:8,
      alignItems:'center',
      justifyContent:'center'
   },
   text:{
      color:'white',
      fontSize:20
   }
})