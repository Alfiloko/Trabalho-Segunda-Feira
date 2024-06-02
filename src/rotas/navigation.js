import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Telas/Login";
import Lista from "../Telas/Lista";
import MenuLista from "../Telas/MenuLista"

const Stack = createStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerTitle: '',
                headerShown: false
            }}>
                <Stack.Screen name='Login' 
                component={Login} />
                <Stack.Screen name='Lista' component = {Lista} />
                <Stack.Screen name='MenuLista' component = {MenuLista} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}