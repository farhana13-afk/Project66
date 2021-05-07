import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Alert} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  speak =()=>{
    var thingToSay = this.state.text;
    this.state.text === ""
    ? Alert.alert('Please Enter a Word')
    : Speech.speak(thingToSay);
  }
render(){
  return (
    <View style={styles.container}>
    <SafeAreaProvider>
     <Header
          backgroundColor={'black'}
          centerComponent={{
            text: 'Text to Speech Convertor',
            style: { color: '#ff6680', fontSize: 15, fontWeight:'bold' },
          }}
        />
      <Image style={styles.image} source={{
          uri:'https://estherbydesign.org/wp-content/uploads/2017/10/dbf59e_72fef489fd3c43199ce2bd606f6a66bfmv2.png'
        }}/>
        <Text style={styles.displayText}>Enter the Word</Text>
      <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.speakButton}
          onPress={this.speak}>
          <Text style={styles.buttonText}>Click Here to Hear Speech</Text>
        </TouchableOpacity>
        </SafeAreaProvider>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ff6680',
  },
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    borderColor: 'black',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    marginTop:15,
    color:'black',
    fontWeight: 'bold',
  },
  image:{
    height: 150,
    width: 150,
    alignSelf:'center',
  },
  speakButton:{
    marginTop:30,
    height: 65,
    width: 210,
    backgroundColor: 'black',
    borderRadius:25, 
    alignItems:'center',
    alignSelf:'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6680',
  },
});
