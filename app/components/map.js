
import React, {  useRef } from "react";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
export default function Map(props) {
  const { longitud,latitud, nombre, height } = props;
  
  return (
    <MapView
      style={{ height: height, width: "100%" }}
      region={{
        latitude: latitud,
        longitude: longitud,
       latitudeDelta : 0.0043 ,
       longitudeDelta : 0.0034 , }}
      
      initialRegion={{
        latitude: latitud,
        longitude: longitud,
       latitudeDelta : 0.0043 ,
       longitudeDelta : 0.0034 , }}
       minZoomLevel={16}
       maxZoomLevel={19}
      
    >
      <MapView.Marker
        coordinate={{
          latitude: latitud,
          longitude: longitud,
        }}
      />
    </MapView>
  );
}
