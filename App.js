import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './layout/login'
import Main from './layout/main'
import Signup from './layout/signup'
import Detail from './layout/detail'
import Task from './layout/task'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='login'
                screenOptions={{headerShown: false}}    
            >
                <Stack.Screen name='login'  component={Login}/>
                <Stack.Screen name='signup' component={Signup}/>
                <Stack.Screen name='main'   component={Main}/>
                <Stack.Screen name='detail' component={Detail}/>
                <Stack.Screen name='task'   component={Task}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}