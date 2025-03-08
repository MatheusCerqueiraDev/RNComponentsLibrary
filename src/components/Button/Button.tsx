import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onPress?: () => void;
}

export const Button = ({
  variant = "primary",
  children,
  onPress,
}: ButtonProps) => {
  const theme = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      alignItems: "center",
      justifyContent: "center",
      opacity: isPressed ? 0.8 : 1,
      transform: [{ scale: isPressed ? 0.98 : 1 }],
    },
    primary: {
      backgroundColor: theme.colors.primary,
      shadowColor: theme.colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    secondary: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
    text: {
      fontSize: theme.fonts.sizes.md,
      fontWeight: "600",
    },
    primaryText: {
      color: theme.colors.background,
    },
    secondaryText: {
      color: theme.colors.primary,
    },
  });

  return (
    <Pressable
      style={[styles.button, styles[variant]]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{children}</Text>
    </Pressable>
  );
};
