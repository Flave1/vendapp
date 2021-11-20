import  React  from "react";
import {
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native';

const HomeScreen = ({navigation}) =>  {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go to Page page" 
        onPress={() => navigation.navigate("Profile")}></Button>
      </View>
    );
  } 

  export default HomeScreen;

  const styles = StyleSheet.create({
    container : {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    }
  })

