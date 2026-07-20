import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Header from "./Header";
import Footer from "./Footer";


export default function Main() {
  const [gender, setGender] = useState("male");
  const [ageRange, setAgeRange] = useState("young");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [advice, setAdvice] = useState("");

    const calculateBMI = () => {
    setError("");
    setMessage("");
    setAdvice("");
    setBmi(null);

    const w = Number(weight);
    const h = Number(height);

    if (!w || !h || w <= 0 || h <= 0) {
      setError("لطفاً وزن و قد معتبر وارد کنید");
      return;
    }

    const heightInMeter = h / 100;
    let result = w / (heightInMeter * heightInMeter);

    // تاثیر جنسیت
    if (gender === "female") result *= 0.95;

    // تاثیر سن
    if (ageRange === "adult") result *= 1.05;
    if (ageRange === "old") result *= 1.1;

    const finalBMI = Number(result.toFixed(1));
    setBmi(finalBMI);

    let targetBMI;
    let adviceText = "";

    if (finalBMI < 18.5) {
      setMessage("کمبود وزن ⚠️");
      targetBMI = 18.5;
      const idealWeight = targetBMI * (heightInMeter ** 2);
      adviceText = `حدود ${Math.ceil(idealWeight - w)} کیلوگرم وزن اضافه کنید`;
    } 
    else if (finalBMI < 25) {
      setMessage("وضعیت نرمال ✅");
      adviceText = "وزن فعلی شما عالیه 👌";
    } 
    else {
      setMessage(finalBMI < 30 ? "اضافه وزن ⚠️" : "چاقی ❌");
      targetBMI = 24.9;
      const idealWeight = targetBMI * (heightInMeter ** 2);
      adviceText = `حدود ${Math.ceil(w - idealWeight)} کیلوگرم وزن کم کنید`;
    }

    setAdvice(adviceText);
  };


  return (
    <View style={styles.container}>
      <Header />

      {/* جنسیت */}
      <View style={styles.row}>
        {["male", "female"].map((g) => (
          <TouchableOpacity
            key={g}
            style={[
              styles.option,
              gender === g && styles.active,
            ]}
            onPress={() => setGender(g)}
          >
            <Text style={styles.optionText}>
              {g === "male" ? "مرد" : "زن"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* سن */}
      <View style={styles.row}>
        {[
          { id: "young", label: "۱۸–۳۰" },
          { id: "adult", label: "۳۱–۵۰" },
          { id: "old", label: "۵۱+" },
        ].map((a) => (
          <TouchableOpacity
            key={a.id}
            style={[
              styles.option,
              ageRange === a.id && styles.active,
            ]}
            onPress={() => setAgeRange(a.id)}
          >
            <Text style={styles.optionText}>{a.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="وزن (kg)"
        placeholderTextColor= "#fff"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="قد (cm)"
        placeholderTextColor= "#fff"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>محاسبه BMI</Text>
      </TouchableOpacity>

      <Footer
        bmi={bmi}
        message={message}
        error={error}
        advice={advice}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
  option: {
    flex: 1,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#1e293b",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#38bdf8",
  },
  optionText: {
    color: "#fff",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#1e293b",
    marginTop: 12,
    borderRadius: 14,
    padding: 14,
    color: "#fff",
  },
  button: {
    marginTop: 24,
    backgroundColor: "#22c55e",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#052e16",
    fontWeight: "bold",
    fontSize: 16,
  },
});

