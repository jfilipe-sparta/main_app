import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Count from '../screens/Count';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Count" component={Count} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
