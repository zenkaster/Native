import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';
import Second from './components/Second';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name='home'
          component={(props) =>
            <Home
              navigation={props.navigation}
              route={props.route}
            />
          }
        />

        <Stack.Screen
          name='second'
          component={(props) => <Second route={props.route} />}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({})

export default App;
