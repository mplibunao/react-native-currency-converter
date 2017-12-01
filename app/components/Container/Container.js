import React, { PropTypes } from "react";
import { View } from "react-native";

const Container = ({ children }) => (
    <View>
        {children}
    </View>
);

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;