
import { TouchableOpacity } from "react-native";
import DoubleClick from 'rn-double-click'

const MyTouchableOpacity = ({ doubleClick, children, onPress, style, onLongPress, delayLongPress }) =>
  doubleClick ?
    <DoubleClick
      style={style}
      onClick={() => onPress && onPress()}>
      {children}
    </DoubleClick>
    :
    <TouchableOpacity
      style={style}
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      delayLongPress={delayLongPress && delayLongPress}
    >
      {children}
    </TouchableOpacity>

export default MyTouchableOpacity;