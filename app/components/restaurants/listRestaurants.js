import React from "react";
import {  StyleSheet,  Text,  View,  FlatList,  ActivityIndicator,  TouchableOpacity,} from "react-native";
import { Image } from "react-native-elements";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";

export default function ListRestaurants(props) {
  const { restaurants } = props;
  const navigation = useNavigation();

  return (
    <View>
      {size(restaurants) > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={(restaurant) => (
            <Restaurant restaurant={restaurant} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.5}
         
         
        />
      ) : (
        <View style={styles.loaderRestaurants}>
          <ActivityIndicator size="large" />
          <Text>Cargando restaurantes</Text>
        </View>
      )}
    </View>
  );
}

function Restaurant(props) {
  const { restaurant, navigation } = props;
  const { id, imagen, nombre, direccion, descripcion } = restaurant.item;
  const imageRestaurant = imagen ? imagen[0] : null;

  const goRestaurant = () => {

    navigation.navigate("restaurant", {
      id,
      nombre,
      imagen,
      direccion,

    });
  };

  return (
    <TouchableOpacity onPress={goRestaurant}>
      <View style={styles.viewRestaurant}>
        <View style={styles.viewRestaurantImage}>
          <Image
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color="#9b0000" />}
            source={
              imageRestaurant
                ? { uri: imagen }
                : require("../../assets/no-image.png")
            }
            style={styles.imageRestaurant}
          />
        </View>
        <View>
          <Text style={styles.restaurantName}>{nombre}</Text>
          <Text style={styles.restaurantAddress}>{direccion}</Text>
          <Text style={styles.restaurantDescription}>
            {descripcion}...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
    color:"#9b0000",
  },
  restaurantAddress: {
    paddingTop: 2,
    color: "grey",
  },
  restaurantDescription: {
    paddingTop: 2,
    color: "grey",
    width: 300,
    textAlign:"justify",
  },
  notFoundRestaurants: {
    marginTop: 10, 
    marginBottom: 20,
    alignItems: "center",
  },
});
