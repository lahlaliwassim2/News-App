import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { View , Text} from "react-native"
import Home from '../screens/Home'
import NewsOverView from '../screens/NewsOverView'
import Saved from '../screens/Saved'
const tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
function HomeScreen() {
    
    return (
       <tab.Navigator screenOptions={{headerShown:false}}>
        <tab.Screen name='Home' component={Home}/>
        <tab.Screen name='Saved' component={Saved }/>
       </tab.Navigator>
    )
}

export default function AppNavigator() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen  options={{headerShown: false}} name='HomeScreen' component={HomeScreen} />
                    <Stack.Screen  name='NewsOverView' component={NewsOverView} />
                </Stack.Navigator>
            </NavigationContainer>
        )
}