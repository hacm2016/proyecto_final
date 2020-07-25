import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/restaurants/restaurants";

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
            </Stack.Navigator>
        );
    }
}