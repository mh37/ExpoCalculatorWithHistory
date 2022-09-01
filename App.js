import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [data, setData] = React.useState([]);
  const [result, setResult] =  React.useState(null)
  
  const [inputValue1, onChangeValue1] = React.useState(0);
  const [inputValue2, onChangeValue2] = React.useState(0);

  const minusButtonPressed = () => {
    let calcResult = parseInt(inputValue1) - parseInt(inputValue2)
    setResult(calcResult)
    setData([...data, { key: inputValue1 + " - " + inputValue2 + " = " + calcResult }]);
  }

  const plusButtonPressed = () => {
    let calcResult = parseInt(inputValue1) + parseInt(inputValue2)
    setResult(calcResult)
    setData([...data, { key: inputValue1 + " + " + inputValue2 + " = " + calcResult }]);
  }

  return (
    <View style={styles.container}>

      <Text id="resultText" style = {styles.text}>
        Result: {result}
      </Text>
      <TextInput 
        id="inputValue1" 
        style={styles.input}
        onChangeText={onChangeValue1}
        value={inputValue1}
        keyboardType="numeric"
        placeholder='First value'
      />
      <TextInput 
        id="inputValue2" 
        style={styles.input}
        onChangeText={onChangeValue2}
        value={inputValue2}
        keyboardType="numeric"
        placeholder='Second value'
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="+"
          onPress={plusButtonPressed} 
        />
        <Button 
          title="-" 
          onPress={minusButtonPressed} 
        />  
      </View>
       

      <Text style = {styles.text}>
        History
      </Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        extraData={result}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center'
  },
  text: {
    marginTop: 50,
    marginBottom: 5,
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});