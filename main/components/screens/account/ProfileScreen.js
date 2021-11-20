import  React  from "react";
import {
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native';



const  ProfileScreen = ({navigation}) =>  {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Button title="Go to profile page" 
        onPress={() => navigation.push("Profile")}></Button>
           <Button title="Go to Home" 
        onPress={() => navigation.navigate("Home")}></Button>
    
      </View>
    );
  }
 
  export default ProfileScreen;

  const  styles = StyleSheet.create({
      container:{
         flex: 1, 
         alignItems: 'center', 
         justifyContent: 'center' 
      }
  })