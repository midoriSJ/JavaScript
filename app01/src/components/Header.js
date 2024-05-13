import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const Header = (props) => (
  <TouchableOpacity
    onPress = {() => alert('onPressed')}
    onLongPress = {() => alert('LongPressed')}
    onPressOut = {() => alert('onPressOut')}
    onPressIn = {() => alert('onPressIn')}
  >
  <View style = {styles.header}>
    <Text style = {styles.mainText}> {props.name} </Text>
  </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor : 'pink',
    padding : 5,
    alignItems : 'center',
    width : '100%',
    justifyContent : 'center'
  },

  mainText: {
    fontSize : 30,
    color : 'red'
  }
});

export default Header;