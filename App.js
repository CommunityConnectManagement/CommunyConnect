import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const handleStart = () => {
    Alert.alert(
      "Project Link",
      "This will connect to Replit & EAS Build soon 🚀"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Connect</Text>
      <Text style={styles.subtitle}>KZN Issue Reporting & Updates</Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Start Project</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Powered by CodeTracker Labs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#a5b4fc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    color: '#94a3b8',
    fontSize: 12,
    position: 'absolute',
    bottom: 20,
  },
});