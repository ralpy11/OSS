import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY,
    }}>
        
        <Tabs.Screen name="ppmp"
            options={{
                tabBarLabel:'PPMP',
                tabBarIcon:({color})=><Ionicons name="bag-add" size={24} color="black" />
            }}
        />
        <Tabs.Screen name="ppmptracer"
            options={{
                tabBarLabel:'PPMP Tracer',
                tabBarIcon:({color})=><Ionicons name="location-outline" size={24} color="black" />
            }}
        />

        <Tabs.Screen name="dashboard"
            options={{
                tabBarLabel:'Dashboard',
                tabBarIcon:({color})=><Ionicons name="grid" size={24} color={color} />
            }}
        />

        <Tabs.Screen name="prtracer"
            options={{
                tabBarLabel:'PR Tracer',
                tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color="black" />
            }}
        />

        <Tabs.Screen name="pr"
            options={{
                tabBarLabel:'Purchase Request',
                tabBarIcon:({color})=><Ionicons name="cart-outline" size={24} color="black" />
            }}
        />
        
    </Tabs>
  )
}