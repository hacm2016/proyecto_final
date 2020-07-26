import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsStack from "./restaurantsStack";
import {AccountStack} from "./accountStack";
import SearchStack from "./searchStack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Navigation  = (props) => {
    
        return (
            <NavigationContainer>
                <Tab.Navigator
                   initialRouteName="restaurants"
                  

                >
                    <Tab.Screen
                        name="restaurants"
                        component={RestaurantsStack}
                        options={{ title: "Restaurantes" }}
                        options={{
                            title: "Restaurantes",
                            tabBarIcon: ({ color, size }) => (
                              <MaterialIcons name="restaurant" color={'red'} size={40} />
                            ),
                          }}
                    />

                    <Tab.Screen
                        name="search"
                        component={SearchStack}
                        options={{ title: "Buscar" ,
                        tabBarIcon: ({ color, size }) => (
                          <MaterialIcons name="search" color={'red'} size={40} />
                        ), }}
                    />
                    <Tab.Screen
                        name="account"
                        component={AccountStack}
                        options={{ title: "Cuenta",  tabBarIcon: ({ color, size }) => (
                            <MaterialIcons  name="account-circle" color={'red'} size={40} />
                          )}}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    
}

export {Navigation};