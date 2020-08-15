import * as React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { Platform } from 'react-native';
import Home from '../screens/home/Home';
import {Text} from 'react-native'
import TabBarIcon from '../component/nav';
import {StackScreenProps, createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';

type RootNavigator = {
    Home: undefined,
    Search: undefined,
    Message: undefined,
    Setting: undefined
}

type StackNavigator = {
    Event: undefined,
    Home: undefined
}

// Root (Main) Navigator
export type RootScreenNavigationProp = BottomTabNavigationProp<RootNavigator, "Home">;
export type RootScreenRouteProp = RouteProp<RootNavigator, "Home">;

// Home Stack Navigator
export type HomeStackScreenNavigationProp = StackNavigationProp<StackNavigator, "Home">;
export type HomeStackScreenRouteProp = RouteProp<StackNavigator, "Home">;


const Tab = createBottomTabNavigator<RootNavigator>();
const Stack = createStackNavigator<StackNavigator>();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                backgroundColor: '#FFFFFF',
                height: Platform.OS === 'ios' ? 94 : 60,
                borderTopWidth: 0
            }
        }}>
            <Tab.Screen 
                name="Home" 
                component={StackNavigator} 
                options={{
                    tabBarIcon: ({color, focused, size}) => <TabBarIcon focused={focused} name={"home"} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={() => { return <Text>Search</Text> }}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <TabBarIcon focused={focused} name="search" />
                }}
            />
            <Tab.Screen
                name="Message"
                component={() => {return <Text>Message</Text>}}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <TabBarIcon focused={focused} name={"envelope"} solid badge={2} />
                }}
            />
            <Tab.Screen
                name="Setting"
                component={() => { return <Text>Setting</Text> }}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <TabBarIcon focused={focused} name="cog" />
                }}
            />
        </Tab.Navigator>
    )
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Event" component={() => <Text>Event Screen</Text>}/>
        </Stack.Navigator>
    )
}