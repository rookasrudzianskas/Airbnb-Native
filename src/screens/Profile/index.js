import React from 'react';
import {Pressable, SafeAreaView, Text, View} from "react-native";

const Profile = () => {
    return (
        <SafeAreaView>
            <View style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Pressable style={{width: '100%', height: 40, backgroundColor: "#ea5151", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{alignItems: "center"}}>Log Out</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
