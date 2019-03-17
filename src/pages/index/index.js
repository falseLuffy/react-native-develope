import React, {Component} from 'react'
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

import FlexBox from '../../components/flexBox'

 class Index extends Component {
    static navigationOptions = {
       title: 'Home',
       headerStyle:{
          backgroundColor:'#899898'
       },
       headerTintStyle:{},
       headerTitleStyle:{}
    };
   render() {
      return (
        <FlexBox></FlexBox>
      )
   }
    componentDidMount(){
       console.log(this.props)
    }
}

const mapStateToProps = (state) => {
   return {
      /*cart: state.cart,
      demo:state.a*/
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      /*plus: () => {
         dispatch({
            type: '请求增援'
         });
      } ,
      plus2: () => {
         dispatch({
            type: '修改',
            data:{a:100,b:200}
         });
      }*/
   };
};


export default withNavigation(connect(mapStateToProps,mapDispatchToProps)(Index))