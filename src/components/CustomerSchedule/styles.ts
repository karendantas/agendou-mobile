import { theme } from "@/src/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: theme.primaryContrast,
    borderRadius: 6,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  customer: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.primary,
  },
  status: {
    fontSize: 12,
    fontWeight: "bold",
    color: theme.primaryContrast,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textTransform: "capitalize",
  },
  service: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: theme.textTertiary,
  },
});