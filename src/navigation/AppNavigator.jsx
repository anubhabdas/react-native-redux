import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Users from '../screens/Users';
import AddUsers from '../screens/AddUsers';
import UpdateUsers from '../screens/UpdateUsers';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// console.log(require('@react-navigation/stack'));

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: '#000000ff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: '#191919ff',
            },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen name='Users' component={Users} showHe />
          <Stack.Screen name='AddUsers' component={AddUsers} />
          <Stack.Screen name='UpdateUsers' component={UpdateUsers} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator