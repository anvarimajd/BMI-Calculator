import { View, Text, StyleSheet } from "react-native";

export default function Footer({ bmi, message, error, advice }) {
  if (error) {
    return (
      <View style={styles.errorBox}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!bmi) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>BMI شما</Text>
      <Text style={styles.value}>{bmi}</Text>
      <Text style={styles.message}>{message}</Text>
      {advice ? <Text style={styles.advice}>{advice}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#020617",
    borderRadius: 20,
    alignItems: "center",
  },
  label: { color: "#94a3b8" },
  value: {
    color: "#38bdf8",
    fontSize: 36,
    fontWeight: "bold",
  },
  message: {
    marginTop: 10,
    color: "#e5e7eb",
    fontSize: 15,
    textAlign: "center",
  },
  advice: {
  marginTop: 8,
  color: "#a7f3d0",
  fontSize: 14,
  textAlign: "center",
  },
  errorBox: {
    marginTop: 30,
    padding: 16,
    backgroundColor: "#7f1d1d",
    borderRadius: 16,
  },
  errorText: {
    color: "#fecaca",
    textAlign: "center",
  },
});
