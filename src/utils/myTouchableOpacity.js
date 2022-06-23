
import { TouchableOpacity } from "react-native";

const MyTouchableOpacity = ({ children, onPress, style, onLongPress, delayLongPress }) =>
  <TouchableOpacity
    style={style}
    onPress={() => onPress && onPress()}
    onLongPress={() => onLongPress && onLongPress()}
    delayLongPress={delayLongPress && delayLongPress}
  >
    {children}
  </TouchableOpacity>

export default MyTouchableOpacity;