//libs
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Icon = ({ name, lib, size, color }) => {
  if (lib === "ai") return <AntDesign name={name} size={size} color={color} />
  if (lib === "en") return <Entypo name={name} size={size} color={color} />
  if (lib === "ei") return <EvilIcons name={name} size={size} color={color} />
  if (lib === "fi") return <Feather name={name} size={size} color={color} />
  if (lib === "fa") return <FontAwesome name={name} size={size} color={color} />
  if (lib === "fo") return <Foundation name={name} size={size} color={color} />
  if (lib === "io") return <Ionicons name={name} size={size} color={color} />
  if (lib === "mi") return <MaterialIcons name={name} size={size} color={color} />
  if (lib === "mci") return <MaterialCommunityIcons name={name} size={size} color={color} />
  if (lib === "zo") return <Zocial name={name} size={size} color={color} />
  if (lib === "sli") return <SimpleLineIcons name={name} size={size} color={color} />
}
export default Icon
