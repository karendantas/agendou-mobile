import { theme } from "@/src/theme/theme";
import { StyleSheet, View, Text } from "react-native";

export function Header () {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Agendou</Text>
            <Text style = {styles.secondText}>Veja seus clientes agendados!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        left:0,
        right:0,
        zIndex:999,
        position: "absolute",
        backgroundColor: theme.primary,
        height: 120,
    },
    title: {
        marginTop: 40,
        marginHorizontal: 20,
        fontSize: 20,
        color: theme.primaryContrast,
        fontWeight: 500
    },
    secondText: {
        marginHorizontal: 20,
        fontSize: 18, 
        fontWeight: 500, 
        color: theme.secondary
                            
    }
})