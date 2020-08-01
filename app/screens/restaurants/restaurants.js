import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
//import { useEffect } from "@react-navigation/native";
import ListRestaurants from "../../components/restaurants/listRestaurants";
import Api from '../../api/restaurantApi';
export default function Restaurants(props) {
  const { navigation } = props;
  const [restaurants, setRestaurants] = useState(null);
  const [totalResaturants, setTotalResaturants] = useState(0);
  const [startRestaurants, setStartRestaurants] = useState(null);
  const limitRestaurants = 10;
  const resultRestaurants = [];
  useEffect(() => {
    Api.getAllRestaurant()
    .then((result) => {
      
      if (result.errors) {
        console.warn('data errors', result.errors);
      } else {
       
             setTotalResaturants(result.length);
             setRestaurants(result);
      }
      
    })
    .catch((err) => {
      console.warn('data err', err);
    });
     
    }, []);
  return ( 
    <View style={styles.viewBody}>
      
      <ListRestaurants
        restaurants={restaurants}
        
      />

    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
