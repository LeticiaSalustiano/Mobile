import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PickerItem(props) {

  let moedasItem = props.moedas.map((Item, index)=>{
    return <Picker.Item value={Item.key} key={index} label={Item.key}/>
  })
 

  return (
    <Picker style={styles.picker}
       selectedValue={props.moedaSelecionada}
       onValueChange={(valor)=> props.quandoMudar(valor)}
    >
        {moedasItem}
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

