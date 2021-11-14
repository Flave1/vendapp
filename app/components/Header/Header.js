import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MenuList from '../MenuList/MenuList';


const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHeader}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/vend.jpg')}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={{marginTop: 15}}>
            <FontAwesomeIcon name="pen" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
              <View>

            <IonicIcon name="notifications" size={32} color="#fff" />
              </View>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 15,
                backgroundColor: 'red',
                position: 'absolute',
                top: 20,
                right: 1,
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 12,
                  justifyContent: 'center',
                  marginTop: 3,
                }}>
                4
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.profileName}>VICTOR BLELL</Text>
        <Text style={styles.profileCode}>10001</Text>
      </View>
      <View style={{padding: 2, backgroundColor: '#000', width: '100%'}} />
      <View style={styles.balanceContainer}>
        <Text style={styles.profileBalance}>BAL:</Text>
        <Text style={styles.profileBalance}>SSL : 1,320,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileCode: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileBalance: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  balanceContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upperHeader: {
    paddingTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Header;
