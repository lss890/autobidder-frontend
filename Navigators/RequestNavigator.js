  
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import Request from '../Screens/User/Request';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Request"
                component={Request}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function CartNavigator() {
    return <MyStack />
}