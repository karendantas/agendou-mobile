import { theme } from "@/src/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 8,
        padding: 20,
        marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
    color: theme.primary,
    marginLeft:10
  }
})