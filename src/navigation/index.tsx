import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home';
import AddUser from '../screens/add-user';
import {SCREEN} from '../constants/screen';
import TransactionDetails from '../screens/transaction-details';

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
        <Stack.Screen
          name={SCREEN.TRANSACTIONS_DETAILS}
          component={TransactionDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteNavigator;
