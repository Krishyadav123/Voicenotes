import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* Main App Navigation */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
