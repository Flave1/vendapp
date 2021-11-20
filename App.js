import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './main/components/screens/HomeScreen';
import ProfileScreen from './main/components/screens/account/ProfileScreen';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ProfileStackScreen = ({}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#242423'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
    }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
            title:''
        }}/> 
    </ProfileStack.Navigator>
)


const HomeStackScreen = ({}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#242423'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:''
        }}/> 
    </HomeStack.Navigator>
)

const App = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default App;

