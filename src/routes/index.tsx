import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Generic from '../screens/Generic';
import Count from '../screens/Count';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Count" component={Count} />
      <Screen name="Generic" component={Generic} />
    </Navigator>
  );
};

export default Routes;
