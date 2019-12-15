import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/authPages/Login';
import SignIn from './pages/authPages/SignIn';
import Home from './pages/Home';
import DetalhePedido from './pages/DetalhePedido';
import AuthLoadingScreen from './pages/AuthLoadingScreen';

const AppStack = createStackNavigator({ Home, DetalhePedido });
const AuthStack = createStackNavigator({ Login, SignIn });

const Routes = createAppContainer(
  createSwitchNavigator({
      AppStack,
      AuthStack,
      AuthLoadingScreen
    },
    {
      initialRouteName: 'AuthLoadingScreen',
  })
);

export default Routes;