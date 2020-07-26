import React, { Component } from "react"
import {View,Text, Image } from "react-native"


export default class Login extends Component {
    render() {
        return (
            <View>
              <Image
                source={require("../../assets/5-tenedores-letras-icono-logo.png")}
                resizeMode="contain"
               
              />
             
            </View>
          );
     
    }
  }

