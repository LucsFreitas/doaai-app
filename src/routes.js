import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';

import Login from './pages/authPages/Login';
import SignIn from './pages/authPages/SignIn';
import DoacoesPendentes from './pages/DoacoesPendentes';
import MinhasDoacoes from './pages/MinhasDoacoes';
import ConfigPage from './pages/ConfigPage';
import DetalheDoacao from './pages/DetalheDoacao';
import AuthLoadingScreen from './pages/AuthLoadingScreen';

const DoacoesPendentesStack = createStackNavigator({ DoacoesPendentes, DetalheDoacao  });
const MinhasDoacoesStack = createStackNavigator({ MinhasDoacoes, DetalheDoacao  });
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