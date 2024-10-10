import { View, StyleSheet } from "react-native";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { PlantlyButton } from "@/components/plantly-button";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);

  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
