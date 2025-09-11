import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  iconLeft?: keyof typeof AntDesign.glyphMap;
  iconRight?: keyof typeof AntDesign.glyphMap;
};

export function Input({ iconLeft, iconRight, style, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      {iconLeft && (
        <AntDesign
          name={iconLeft}
          size={20}
          color="#94a3b8"
          style={styles.icon}
        />
      )}

      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholderTextColor="#94a3b8"
      />

      {iconRight && (
        <AntDesign
          name={iconRight}
          size={20}
          color="#94a3b8"
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: "#111827",
  },
  icon: {
    marginHorizontal: 4,
  },
});
