import { createStackNavigator,createAppContainer} from "react-navigation";

import Index from '../pages/index/index'
import Details from '../pages/detail/details'
import FlatListDemo from '../components/FlatListDemo'

const router = {
   Home: {screen:Index},
   Details:{screen:Details},
   Demo:{screen:FlatListDemo}
};

const config = {
   initialRouteName: "Demo"
};

const AppNavigator = createStackNavigator(router,config);

export default createAppContainer(AppNavigator)


function resolve(url) {
   return '../pages/'+url+'/'+url
}