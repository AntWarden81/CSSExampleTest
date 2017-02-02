import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "center": {
        "textAlign": "center",
        "border": "3px solid #ADD8E6",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "header-font-1": {
        "fontFamily": "\"Georgia\", Georgia, Serif",
        "textAlign": "center"
    },
    "header-font-2": {
        "fontFamily": "\"Georgia\", Georgia, Serif",
        "color": "grey",
        "textAlign": "center"
    },
    "page": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "border": "3px solid black",
        "display": "flex"
    },
    "item": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "border": "3px solid #ADD8E6"
    },
    "height-50": {
        "height": "50%",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "img": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "height": "100%",
        "width": "100%"
    }
});