import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { View , Text} from "react-native"
import NewsOverView from '../components/NewsOverView'
const Stack = createNativeStackNavigator()
function HomeScreen() {
    const tab = createBottomTabNavigator()
    return (
       <tab.Navigator>
        <tab.Screen name='Home' component={()=> <Text>Home</Text> }/>
        <tab.Screen name='Saved' component={()=> <Text>Saved</Text> }/>
       </tab.Navigator>
    )
}

export default function AppNavigator() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown: false}} name='HomeScreen' component={HomeScreen} />
                    <Stack.Screen  name='NewsOverView' component={NewsOverView} />
                </Stack.Navigator>
            </NavigationContainer>
        )
}