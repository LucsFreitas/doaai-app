import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import DetalhePedido from './pages/DetalhePedido';

const Routes = createAppContainer(
  createSwitchNavigator({
      Login,
      Home,
      DetalhePedido
    },
    {
      initialRouteName: 'Login',
  })
);

export default Routes;