import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import ChildDetails from './pages/ChildDetails';

const Routes = createAppContainer(
  createSwitchNavigator({
      Login,
      Home,
      ChildDetails
    },
    {
      initialRouteName: 'Login',
  })
);

export default Routes;