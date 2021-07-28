import React from 'react';
import {Pressable, SafeAreaView, Text, View} from "react-native";
import { Auth } from 'aws-amplify';


async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

const Profile = () => {
    return (
        <SafeAreaView>
            <View style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Pressable onPress={signOut} style={{width: '100%', height: 40, backgroundColor: "#ea5151", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{alignItems: "center", fontWeight: "bold", color: "white"}}>Log Out</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
