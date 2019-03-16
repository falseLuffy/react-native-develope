import React, {Component} from 'react'
import {withNavigation} from 'react-navigation';

import FlexBox from '../../components/flexBox'

 class Index extends Component {
   render() {
      return (
        <FlexBox></FlexBox>
      )
   }
}

export default withNavigation(Index)