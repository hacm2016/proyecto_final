import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Account} from "../screens/account/account";
import Login from "../screens/account/login";
import Register from "../components/account/registerForm"
const Stack = createStackNavigator();

const AccountStack  = (props) => {
 
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="account"
                    component={Account}
                    options={{ title: "Cuenta" }}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ title: "Iniciar sesión" }}
                />
                 <Stack.Screen
                    name="register"
                    component={Register}
                    options={{ title: "Registro de Usuario" }}
                />
            </Stack.Navigator>
        );
    
}
export {AccountStack};