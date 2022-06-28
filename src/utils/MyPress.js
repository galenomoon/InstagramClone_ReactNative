
import { TouchableOpacity as TO } from "react-native";
import DoubleClick from 'rn-double-click'

const MyPress = ({ doubleClick, children, onPress, style, onLongPress, delayLongPress }) =>
  doubleClick ?
    <DoubleClick
      style={style}
      onClick={() => onPress && onPress()}>
      {children}
    </DoubleClick>
    :
    <TO
      style={style}
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      delayLongPress={delayLongPress && delayLongPress}
    >
      {children}
    </TO>

export default MyPress;