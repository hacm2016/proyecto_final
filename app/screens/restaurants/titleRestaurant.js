import React from "react";
import {  StyleSheet,  Text,  View,  FlatList,  ActivityIndicator,  TouchableOpacity,} from "react-native";
import { Image } from "react-native-elements";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";


export default function TitleRestaurant(props) {
    const { restaurant } = props;
    const navigation = useNavigation();
  
    return (
      <View>
      
              <Restaurant restaurant={restaurant} navigation={navigation} />
        
      </View>
    );
  }
  
  function Restaurant(props) {
    const { restaurant, navigation } = props.restaurant;
 
    
    return (
    
          <View>
            <Text style={styles.restaurantName}>hola</Text>
          
          </View>
         );
  }
  
  
  const styles = StyleSheet.create({
    loaderRestaurants: {
      marginTop: 10,
      marginBottom: 10,
      alignItems: "center",
    },
    viewRestaurant: {
      flexDirection: "row",
      margin: 10,
    },
    viewRestaurantImage: {
      marginRight: 15,
    },
    imageRestaurant: {
      width: 80,
      height: 80,
    },
    restaurantName: {
      fontWeight: "bold",
    },
    restaurantAddress: {
      paddingTop: 2,
      color: "grey",
    },
    restaurantDescription: {
      paddingTop: 2,
      color: "grey",
      width: 300,
    },
    notFoundRestaurants: {
      marginTop: 10, 
      marginBottom: 20,
      alignItems: "center",
    },
  });
  