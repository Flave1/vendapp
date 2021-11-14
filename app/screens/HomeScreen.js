import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header/Header';
import MenuList from '../components/MenuList/MenuList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header />
      </View>
      <MenuList title="BILL PAYMENT" iconName="newspaper-outline" />
      <MenuList title="SAVED METERS" iconName="speedometer" />
      <MenuList title="MANAGE POS" iconName="ios-person" />
      <MenuList title="MANAGE WALLET" iconName="wallet" />
      <MenuList title="MANAGE REPORTS" iconName="reader-outline" />
      <MenuList title="LOG OUT" iconName="log-out-outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    marginBottom: 40
  }
});
