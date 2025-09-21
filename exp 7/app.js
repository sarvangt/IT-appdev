import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
   Alert.alert(
  'Registration Data',
  `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nGender: ${gender}\nCountry: ${country}`
);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Form</Text>

      {/* Name Field */}
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />

      {/* Email Field */}
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        keyboardType="email-address"
      />

      {/* Password Field */}
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />

      {/* Gender Selection */}
      <Text>Gender:</Text>
      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        <Button title="Male" onPress={() => setGender('Male')} />
        <View style={{ width: 10 }} />
        <Button title="Female" onPress={() => setGender('Female')} />
        <View style={{ width: 10 }} />
        <Button title="Other" onPress={() => setGender('Other')} />
      </View>
      <Text>Selected Gender: {gender}</Text>

      {/* Country Picker */}
      <Text>Country:</Text>
      <Picker
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select country" value="" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="UK" value="UK" />
      </Picker>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  heading: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 }
});