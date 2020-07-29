import React, { Component } from "react"
import Api from '../../api/restaurantApi';
import { StyleSheet, View, Text  , FlatList,  TouchableOpacity,  ActivityIndicator,} from "react-native";
import { Icon } from "react-native-elements";
import ListRestaurants from "../../components/restaurants/listRestaurants";
import { Image } from "react-native-elements";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
export default class Restaurants extends Component {
        constructor(props) {
          super(props);
          this.state = {
                restaurants: [],
            
          };
        }
        componentDidMount() { 
       Api.getAllRestaurant()
       .then((result) => {
       
         if (result.errors) {
           console.warn('data errors', result.errors);
         } else {
           this.setState({
                restaurants: result,
           });
         
         }
         
       })
       .catch((err) => {
         console.warn('data err', err);
       });
}
render() {  
        const {restaurants} = this.state;  
       // console.warn('data Products111', restaurants.length);
    return  <View style={styles.viewBody}>
         <View >
            <Text style={styles.title}>{'Recommended'}</Text>
           
              {restaurants.length !== 0 ? (
                <FlatList
                  data={restaurants}
                  vertical 
                  renderItem={({item, index}) => (
                        <TouchableOpacity >
                        <View style={styles.viewRestaurant}>
                          <View style={styles.viewRestaurantImage}>
                            <Image
                              resizeMode="cover"
                              PlaceholderContent={<ActivityIndicator color="fff" />}
                              source={
                                item.imagen
                                  ? { uri: item.imagen }
                                  : require("../../assets/no-image.png")
                              }
                              style={styles.imageRestaurant}
                            />
                          </View>
                          <View>
                            <Text style={styles.restaurantName}>{item.nombre}</Text>
                            <Text style={styles.restaurantAddress}>{item.direccion}</Text>
                            <Text style={styles.restaurantDescription}>
                              {item.descripcion}...
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReachedThreshold={0.5}
                />
              ) : null}
           
          </View>
        </View>

     
}  
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
      