import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import IonicIcon from 'react-native-vector-icons/Ionicons';
const MenuList = ({title, iconName}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <IonicIcon name={iconName} size={25} color="#fff" />
      </View>
      <View>
        <Text
          style={styles.textList}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  iconWrapper: {
    marginRight: 20
  },
  textList: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center',
  }
});
export default MenuList;
