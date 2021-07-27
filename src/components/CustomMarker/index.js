import React from 'react';
import {Marker} from "react-native-maps";
import {Text, View} from "react-native";

const CustomMarker = () => {
    return (
         <Marker
             coordinate={{latitude: 37.78825, longitude: -122.4324,}}>

             <View style={{backgroundColor: "white", padding: 5, borderRadius: 20, borderColor: "grey", borderWidth: 1,}}>
                 <Text style={{fontWeight: "bold", fontSize: 10}}>$300</Text>
             </View>

         </Marker>
    );
};

export default CustomMarker;
