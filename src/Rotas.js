import React from "react";

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from './telas/Servicos'
import Carrinho from './telas/Carrinho'

import { cores } from './estilos'

const Tab = createBottomTabNavigator()

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: cores.laranja,
                tabBarInactiveTintColor: "white",
                tabBarLabelStyle: { 
                  fontSize: 16,
                  padding: 45,
                },
                tabBarStyle: {
                    backgroundColor: cores.roxo,
                    height: 70,
                },
                tabBarHideOnKeyboard: true,
            }}>
            <Tab.Screen name="Serviços" component={Servicos} options={{ tabBarIcon: () => null }}/>
            <Tab.Screen name="Carrinho" component={Carrinho} options={{ tabBarIcon: () => null }}/>
        </Tab.Navigator>
    </NavigationContainer>
}