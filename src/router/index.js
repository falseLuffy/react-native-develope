import { createStackNavigator,createAppContainer} from "react-navigation";

import Index from '../pages/index/index'
import Details from '../pages/detail/details'

const router = {
   Home: {screen:Index},
   Details:{screen:Details}
};

const config = {
   initialRouteName: "Home"
};

const AppNavigator = createStackNavigator(router,config);

export default createAppContainer(AppNavigator)