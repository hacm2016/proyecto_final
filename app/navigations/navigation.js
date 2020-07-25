import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsStack from "./restaurantsStack";
import AccountStack from "./accountStack";
import SearchStack from "./searchStack";
const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                   initialRouteName="restaurants"
                  

                >
                    <Tab.Screen
                        name="restaurants"
                        component={RestaurantsStack}
                        options={{ title: "Restaurantes" }}
                    />

                    <Tab.Screen
                        name="search"
                        component={SearchStack}
                        options={{ title: "Buscar" }}
                    />
                    <Tab.Screen
                        name="account"
                        component={AccountStack}
                        options={{ title: "Cuenta" }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
