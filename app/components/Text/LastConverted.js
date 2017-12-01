import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import moment from "moment";

import styles from "./styles";

const LastConverted = () => null;

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number
};

export default LastConverted;