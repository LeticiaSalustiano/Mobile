import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PickerItem({ selectedValue, onValueChange }) {
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      <Picker.Item label="USD" value="USD" />
      <Picker.Item label="EUR" value="EUR" />
      <Picker.Item label="JPY" value="JPY" />
      <Picker.Item label="GBP" value="GBP" />
      <Picker.Item label="BRL" value="BRL" />
      <Picker.Item label="CNY" value="CNY" />
      <Picker.Item label="INR" value="INR" />
      <Picker.Item label="RUB" value="RUB" />
      <Picker.Item label="AUD" value="AUD" />
      <Picker.Item label="MXN" value="MXN" />
      <Picker.Item label="BTC" value="BTC" />
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: '90%',
    height: 50,
    marginBottom: 15,
  },

});

