import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home"

// Allows us to access this color through estylesheet
EStyleSheet.build({
  $primaryBlue: "#4F6D7A",  
})


export default () => <Home />;