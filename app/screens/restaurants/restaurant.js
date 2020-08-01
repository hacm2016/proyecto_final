import React, { useState, useEffect, useCallback, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator,  TouchableOpacity} from "react-native";
import { Rating, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import Api from '../../api/restaurantApi';
import { Image } from "react-native-elements";
import Map from "../../components/map";
import Carousel from "../../components/carousel";
const screenWidth = Dimensions.get("window").width;

export default function Restaurant(props) {
  const { navigation, route } = props;
  const { id, nombre } = route.params;
  const [restaurant, setRestaurant] = useState(null); 
  navigation.setOptions({ title: nombre });
  
  //const { resta } = restaurant;.des
/*
  useFocusEffect(
    useCallback(() => {
    Api.getRestaurantId(id)
    .then((result) => {
      
      if (result.errors) {
        console.warn('data errors', result.errors);
      } else {
       
             
             setRestaurant(result);
      }
      
    })
    .catch((err) => {
      console.warn('data err', err);
    });
   
}, [])
);*/

    useEffect(() => {
    Api.getRestaurantId(id)
    .then((result) => {
      
      if (result.errors) {
        console.warn('data errors', result.errors);
      } else {
       
            // const data=result;
             setRestaurant(result);
           // const a= parseFloat(result.longitud);
           // const b =parseFloat(result.latitud);

      }
      
    })
    .catch((err) => {
      console.warn('data err', err);
    });
}, [props.restaurant])
if (!restaurant) return <Text >cargando</Text>;

  return (
    <ScrollView vertical style={styles.viewBody}>
         
         <Carousel
        arrayImages={restaurant.imagenes}
        height={200}
        width={screenWidth}
      />
        
    <TitleRestaurant
        nombre={restaurant.nombre}
        descripcion={restaurant.descripcion}
       
      />
       <RestaurantInfo
        longitud={parseFloat(restaurant.longitud)}
        latitud={parseFloat(restaurant.latitud)}
        nombre={restaurant.nombre}
        direccion={restaurant.direccion}
      />
    </ScrollView>
  );
}


function TitleRestaurant(props) {
    const { nombre, descripcion } = props;
    return (
      <View style={styles.viewRestaurantTitle}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.nameRestaurant}>{nombre}</Text>
        </View>
        <Text style={styles.descriptionRestaurant}>{descripcion}</Text>
      </View>
    );
  }

function RestaurantInfo(props) {
  const { longitud,latitud, nombre, direccion } = props;

  const listInfo = [
    {
      text: direccion,
      iconName: "map-marker",
      iconType: "material-community",
      action: null,
      
    },
    {
      text: "111 222 333",
      iconName: "phone",
      iconType: "material-community",
      action: null,
    },
    {
      text: "xAgustin93@gmail.com",
      iconName: "at",
      iconType: "material-community",
      action: null,
    },
  ];

  return (
    <View style={styles.viewRestaurantInfo}>
     
      <Map longitud={longitud} latitud={latitud} nombre={nombre} height={250}  />
      {map(listInfo, (item, index) => (
        <ListItem
          key={index}
          title={item.text}
          leftIcon={{
            name: item.iconName,
            type: item.iconType,
            color: "#9b0000",
          }}
          containerStyle={styles.containerListItem}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewRestaurantTitle: {
    padding: 15,
  },
  nameRestaurant: {
    fontSize: 20,
    fontWeight: "bold",
    color:"#9b0000",
  },
  descriptionRestaurant: {
    marginTop: 5,
    color: "grey",
    textAlign:"justify",
  },
  rating: {
    position: "absolute",
    right: 0,
  },
  viewRestaurantInfo: {
    margin: 15,
    marginTop: 25,
  },
  restaurantInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  containerListItem: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 1,
  },
  viewFavorite: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 100,
    padding: 5,
    paddingLeft: 15,
  },
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
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  imageRestaurant: {
    width: 410,
    height: 180,
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
