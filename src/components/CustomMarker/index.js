import React from 'react';
import {Marker} from "react-native-maps";
import {Text, View} from "react-native";

const CustomMarker = (props) => {

    const {coordinate, price} = props;

    return (
         <Marker
             coordinate={coordinate}>

             <View style={{backgroundColor: "white", padding: 5, borderRadius: 20, borderColor: "grey", borderWidth: 1,}}>
                 <Text style={{fontWeight: "bold", fontSize: 10}}>${price}</Text>
             </View>

         </Marker>
    );
};

export default CustomMarker;
