import { React } from "react";

import { View, Text, Button } from "react-native";
const SplashScreen = () => {
    return ( <
        View >
        <
        Text > Splash Screen < /Text>  <
        Button title = "Click"
        onPress = {
            () => alert("Button is pressed") }
        /> </View >
    );
};