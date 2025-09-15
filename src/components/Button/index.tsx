import React from "react";
import { DimensionValue, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
  title: string;
  icon?: keyof typeof AntDesign.glyphMap; 
  iconPosition?: "left" | "right";
  disabled?: boolean,
  width?: DimensionValue
  variant?: "primary" | "secondary"
};

export function Button({
  title,
  icon,
  iconPosition = "left",
  disabled = false,
  width,
  variant = "primary",
  ...rest
  
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, {width}, styles[variant]]}
      activeOpacity={0.7}
      {...rest}
    >
      <View style={styles.content}>
        {icon && iconPosition === "left" && (
          <AntDesign name={icon} size={20} color="#fff" style={styles.icon} />
        )}
        <Text style={styles.title}>{title}</Text>
        {icon && iconPosition === "right" && (
          <AntDesign name={icon} size={20} color="#fff" style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
}


