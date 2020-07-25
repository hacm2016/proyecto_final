import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/search";

const Stack = createStackNavigator();

export default class SearchStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="account"
                    component={Search}
                    options={{ title: "Buscar" }}
                />
            </Stack.Navigator>
        );
    }
}