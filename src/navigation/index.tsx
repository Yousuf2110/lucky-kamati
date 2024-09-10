import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import AddUser from '../screens/add-user';
import {SCREEN} from '../constants/screen';

const Stack = createNativeStackNavigator();

function RouteNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN.HOME} component={Home} />
        <Stack.Screen name={SCREEN.ADD_USER} component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteNavigator;
