import * as React from "react"
import { ImageBackground, ImageStyle, Platform, ViewStyle } from "react-native"
import { spacing } from "../../theme"
import { GlassmorphismProps } from "./glassmorphism.props"

const glassmorphismContainer = require("./Glassmorphism.png")

const ROOT: ViewStyle = {
  alignSelf: "center",
  padding: spacing[3],
  maxWidth: "100%",
  height: "100%",
}

const IMAGE: ImageStyle = {
  resizeMode: "stretch",
  ...Platform.select({
    ios: {
      shadowColor: "#EFEFEF",
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 5,
        height: 1,
      },
      shadowRadius: 20,
    },
    android: {
      elevation: 1,
    },
  }),
}

export function Glassmorphism(props: GlassmorphismProps) {
  const rootStyle = [ROOT, props.style]
  const imageStyle = [IMAGE, props.imageStyle]

  return (
    <ImageBackground source={glassmorphismContainer} style={rootStyle} imageStyle={imageStyle}>
      {props.children}
    </ImageBackground>
  )
}
