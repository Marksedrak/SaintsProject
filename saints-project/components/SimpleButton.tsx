import {
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";

export interface SimpleButtonProps {
  onPress: () => void;
  title: string;
  ContainerStyle?: ViewStyle;
  TextStyle?: TextStyle;
}

const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: "#037dff",
    padding: 10,
    borderRadius: 5,
  },
  defultText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export function SimpleButton({
  onPress,
  title,
  ContainerStyle,
  TextStyle,
}: SimpleButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={ContainerStyle ?? styles.defaultContainer}>
        <Text style={TextStyle ?? styles.defaultText}>{title}</Text>
      </View>
    </Pressable>
  );
}
