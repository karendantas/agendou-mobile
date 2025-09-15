import { theme } from "@/src/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  primary: {
    backgroundColor: theme.primary,
  },
  secondary: {
    backgroundColor: theme.error,
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.primaryContrast,
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    marginHorizontal: 6,
  },
});