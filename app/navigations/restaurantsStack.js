import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/restaurants/restaurants";
import Restaurant from "../screens/restaurants/restaurant";

const Stack = createStackNavigator();

export default class RestaurantsStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="restaurants"
                    component={Restaurants}
                    options={{ title: "Restaurantes" }}
                />
                <Stack.Screen
                 name="restaurant" 
                 component={Restaurant} 
                
                 />
            </Stack.Navigator>
        );
    }
}