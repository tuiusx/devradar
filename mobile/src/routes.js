import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Radar Tuiu`S'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
      defaultNavigationOptions: {
          headerTintColor: '#FFFFFF',
          headerBackTitleVisible: false,
          headerStyle: {
              backgroundColor: '#2E8B57',
          }
      } 
    })
);

export default Routes;