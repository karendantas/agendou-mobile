import { theme } from "@/src/theme/theme";
import { StyleSheet, View, Text } from "react-native";

export function Header () {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Agendou</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        backgroundColor: theme.primary,
        height: 100,
    },
    title: {
        marginTop: 40,
        marginHorizontal: 20,
        fontSize: 20,
        color: theme.primaryContrast,
        fontWeight: 500
    }
})