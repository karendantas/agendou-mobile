import { Tabs } from "expo-router";
import {AntDesign} from "@expo/vector-icons"
import { theme } from "@/src/theme/theme";

export default function Layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.primary
        }}>
            <Tabs.Screen name = "index" 
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => (
                    <AntDesign name="home" color={color} size={25}/>
                    )
                }}
            />
        </Tabs>
          
    )
}