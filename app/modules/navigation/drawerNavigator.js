import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Utils from '../../services/utils/utils';
import TabBarNavigator from './tabNavigator';
import DrawerMenu from '../../components/drawerMenu/drawerMenu';

const stackNavRoutes = {
    TabBarNavigator,
};

const getDrawerWidth = () => Utils.size.width * 0.75;

const DrawerNavigator = createAppContainer(createDrawerNavigator(
    stackNavRoutes,
    {
        drawerWidth: getDrawerWidth(),
        contentComponent: props => <DrawerMenu {...props} />,
        drawerBackgroundColor: '#ffffff',
    },
));

export default DrawerNavigator;
