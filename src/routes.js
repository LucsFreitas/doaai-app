import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import DetalhePedido from './pages/DetalhePedido';
import AuthLoadingScreen from './pages/AuthLoadingScreen';

const AppStack = createStackNavigator({ Home, DetalhePedido });

const Routes = createAppContainer(
  createSwitchNavigator({
      AppStack,
      Login,
      AuthLoadingScreen
    },
    {
      initialRouteName: 'AuthLoadingScreen',
  })
);

export default Routes;