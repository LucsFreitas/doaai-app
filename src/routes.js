import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';

import Login from './pages/authPages/Login';
import SignIn from './pages/authPages/SignIn';
import PedidosPendentes from './pages/PedidosPendentes';
import MeusPedidos from './pages/MeusPedidos';
import ConfigPage from './pages/ConfigPage';
import DetalhePedido from './pages/DetalhePedido';
import AuthLoadingScreen from './pages/AuthLoadingScreen';

const DoacoesPendentesStack = createStackNavigator({ PedidosPendentes, DetalhePedido  });
const MinhasDoacoesStack = createStackNavigator({ MeusPedidos, DetalhePedido  });
const AuthStack = createStackNavigator({ Login, SignIn });
const MainApp = createBottomTabNavigator(
  {
    DoacoesPendentesStack,
    MinhasDoacoesStack,
    ConfigPage,
  },
  {
    initialRouteName: 'DoacoesPendentesStack',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'DoacoesPendentesStack') {
          iconName = 'list-ul';
        } else if (routeName === 'MinhasDoacoesStack') {
          iconName = 'user';
        } else if (routeName === 'ConfigPage') {
          iconName = 'cog';
        }

        return <Icon color={tintColor} type={'font-awesome'} name={iconName} size={25}/>
      },
      tabBarLabel: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let tabLabel;
        if (routeName === 'DoacoesPendentesStack') {
          tabLabel = 'Doar';
        } else if (routeName === 'MinhasDoacoesStack') {
          tabLabel = 'Minhas Doações';
        } else if (routeName === 'ConfigPage') {
          tabLabel = 'Configurações';
        }
        return <Text
          style={{
            alignSelf: 'center',
            color: tintColor,
          }}
          >{tabLabel}</Text>
      }
    }),
    tabBarOptions: {
      activeBackgroundColor: '#b3cde0',
    }
  }
);

const Routes = createAppContainer(
  createSwitchNavigator({
      MainApp,
      AuthStack,
      AuthLoadingScreen
    },
    {
      initialRouteName: 'AuthLoadingScreen',
  })
);

export default Routes;