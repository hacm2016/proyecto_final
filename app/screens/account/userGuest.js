import React, { Component } from "react"
import {StyleSheet, View, ScrollView, Text, Image} from "react-native"
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Route } from "@react-navigation/routers";                      


const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
    },
    image: {
      height: 300,
      width: "100%",
      marginBottom: 40,
    },
    title: {
      fontWeight: "bold",
      fontSize: 19,
      marginBottom: 10,
      textAlign: "center",
    },
    description: {
      textAlign: "center",
      marginBottom: 20,
    },
    viewBtn: {
      flex: 1,
      alignItems: "center",
    },
    btnStyle: {
      backgroundColor: "#9b0000",
    },
    btnContainer: {
      width: "70%",
    },
  });
  
  const UserGuest  = (props) =>   {
  
    const navigation=useNavigation();
    //console.warn('navigation', navigation);
     /*
      goLogin = () => {
       console.warn('this.props', this.props);
      //  console.log('this.props', this.props);
     // Route..navigation.navigate('login');
     const navigation=useNavigation();
     console.warn('navigation', navigation);
   //  this.props.navigation.navigate('login');
      };
   */
       
    return   (
    
    <ScrollView centerContent={true} style={styles.viewBody}>
    <Image
      source={require("../../assets/logologin.jpg")}
      resizeMode="contain"
      style={styles.image}
    />
    <Text style={styles.title}>Ingresar a tu perfil en el sistema</Text>
    <Text style={styles.description}>
      Registrate en el Sistema de Gestión de Restaurants en el Perú, para poder ingresar tu restaurant.
    </Text>
    <View style={styles.viewBtn}>
      <Button
        title="Ver tu perfil"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer} 
       // onPressButton={this.goLogin}   
     //   onPress={this.goLogin}
        onPress={() => this.goLogin()}   
        
      //  onPress={() => this.props.navigation.navigate('login')}    
       onPress={() => navigation.navigate('login')}
      />
    </View>
  </ScrollView>
     );
    }
   
    export {UserGuest};
  