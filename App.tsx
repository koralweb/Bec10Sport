// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screensList from './src/screens/screensList.js';

const Stack = createNativeStackNavigator();

function App() {
  const renderScreens = () => {
    return screensList.map(screen => (
      <Stack.Screen
        name={screen.name}
        component={screen.screen}
        options={{headerShown: false}}
        key={screen.name}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
