import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "../Screens/Products"
import SinglePro from '../Screens/SinglePro';


const Stack = createNativeStackNavigator();

function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: true, headerTitleAlign: 'center' }}
                    name="Products" component={Products} />
                <Stack.Screen name="SingleProduct" component={SinglePro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNav;