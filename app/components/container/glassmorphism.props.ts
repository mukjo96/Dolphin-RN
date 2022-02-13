import { ImageStyle, StyleProp, ViewStyle } from "react-native"

export interface GlassmorphismProps {
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  children?: React.ReactNode
}
