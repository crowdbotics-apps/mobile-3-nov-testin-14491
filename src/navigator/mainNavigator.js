import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213769Navigator from '../features/BlankScreen213769/navigator';
import BlankScreen113768Navigator from '../features/BlankScreen113768/navigator';
import BlankScreen013767Navigator from '../features/BlankScreen013767/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213769: { screen: BlankScreen213769Navigator },
BlankScreen113768: { screen: BlankScreen113768Navigator },
BlankScreen013767: { screen: BlankScreen013767Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
