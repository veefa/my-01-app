import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react";

export default function HomeScreen() {
  const [tasks, setTasks] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>

      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Pressable style={styles.button} onPress={() => console.log("Task added")}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
        <Text>Learn React Native</Text>
        <Text>Build ToDo App</Text>
        <Text>Exercise</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#570101",
  },
  input: {
    borderWidth: 1,
    borderColor: "#570101",
    padding: 12,
    borderRadius: 12,
   
  },
  content: {
    gap: 16,
  },
  text: {},
  button: {
    backgroundColor: "#570101",
    padding: 14,
    borderRadius: 12, 
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
