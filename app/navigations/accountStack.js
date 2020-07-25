import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/account";

const Stack = createStackNavigator();

export default class AccountStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="account"
                    component={Account}
                    options={{ title: "Cuenta" }}
                />
            </Stack.Navigator>
        );
    }
}