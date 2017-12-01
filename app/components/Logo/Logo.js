import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import styles from "./styles";

const Logo = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                style={styles.containerImage}
                source={require("./images/background.png")}
            >
                <Image source={require("./images/logo.png")} style={styles.image} resizeMode="contain" />
            </ImageBackground>
            <Text style={styles.text}>Currency Converter</Text>
        </View>
    );
};

export default Logo;