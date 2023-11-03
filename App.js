import { SafeAreaView, StyleSheet, Text, View ,StatusBar, Alert} from 'react-native';
import Button from './components/Button';
import Row from './components/Row';
import { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function App(){

    const [currentValue,setCurrentValue]=useState("0")
    const [operator,setOperator]=useState(null)
    const [nextValue,setNextValue]=useState(null)

    const valButtonPressed=({text})=>{
      if(currentValue==='0'){
        setCurrentValue(text)
      }else{
        if(operator!==null){
          if(nextValue!==null){
            setNextValue(nextValue+text)
          }else{
            setNextValue(text)
          }
        }else{
          if(operator===null){
            setCurrentValue(currentValue+text)
          }
        }
      }
    }
    
    const deleteCharacter = () => {
      if(operator===null){
        if (currentValue.length > 1) {
          const newValue = currentValue.slice(0, -1);
          setCurrentValue(newValue);
        } else {
          setCurrentValue("0");
        }
      }else{
        if(nextValue===null){
          setOperator(null)
        }else{
          if (nextValue.length > 1) {
            const newNValue = nextValue.slice(0, -1);
            setNextValue(newNValue);
          } else {
            setNextValue(null);
          }
        }
      }
    };

    const answer=()=>{
      let result;

      const numCurrentValue = parseFloat(currentValue);
      const numNextValue = parseFloat(nextValue);
      switch (operator) {
        case "+":
          result = numCurrentValue + numNextValue;
          break;
        case "-":
          result = numCurrentValue - numNextValue;
          break;
        case "*":
          result = numCurrentValue * numNextValue;
          break;
        case "/":
          if (numNextValue !== 0) {
            result = numCurrentValue / numNextValue;
          } else {
            Alert.alert('Error', 'Division by zero is not allowed');
            return;
          }
          break;
        default:
          Alert.alert("Invalid operator")
          return;
      }
      setCurrentValue(result.toString())
      setOperator(null)
      setNextValue(null)
    }

    return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="white"></StatusBar>
          <View style={styles.resultScreen}>
            <Text style={styles.resValue}>{currentValue}{operator}{nextValue}</Text>
          </View>
          <View style={styles.btns}>
            <View style={[styles.row, {marginTop:10}]}>
            <Button
              onPress={()=>{
                if(currentValue!=='0'){
                  setCurrentValue("0")
                  setOperator(null)
                  setNextValue(null)
                }
              }}
              theme="secondary"
              text="AC"
              />
              <Button
              onPress={deleteCharacter}
              theme="secondary"
              text={<AntDesign name="closecircleo" size={24} color="white" />}
              />
            </View>
            <View style={styles.row}>
              <Button
              theme="secondary"
              text="1"
              onPress={()=>valButtonPressed({text:"1"})}
              />
              <Button
              onPress={()=>valButtonPressed({text:"2"})}
              theme="secondary"
              text="2"
              />
              <Button
              onPress={()=>valButtonPressed({text:"3"})}
              theme="secondary"
              text="3"
              />
            </View>
            <View style={styles.row}>
              <Button
              onPress={()=>valButtonPressed({text:"4"})}
              theme="secondary"
              text="4"
              />
              <Button
              onPress={()=>valButtonPressed({text:"5"})}
              theme="secondary"
              text="5"
              />
              <Button
              onPress={()=>valButtonPressed({text:"6"})}
              theme="secondary"
              text="6"
              />
            </View>
            <View style={styles.row}>
              <Button
              onPress={()=>valButtonPressed({text:"7"})}
              theme="secondary"
              text="7"
              />
              <Button
              onPress={()=>valButtonPressed({text:"8"})}
              theme="secondary"
              text="8"
              />
              <Button
              onPress={()=>valButtonPressed({text:"9"})}
              theme="secondary"
              text="9"
              />
            </View>
            <View style={styles.row}>
              <Button
              onPress={()=>{
                if(currentValue!=='0' && operator===null){
                  setOperator("+")
                }
              }
            }
              theme="secondary"
              text="+"
              />
              <Button
              onPress={()=>{
                if(currentValue!=='0' && operator===null){
                  setOperator("-")
                }
              }}
              theme="secondary"
              text="-"
              />
              <Button
              onPress={()=>{
                if(currentValue!=='0' && operator===null){
                  setOperator("*")
                }
              }}
              theme="secondary"
              text="*"
              />
              <Button
              onPress={()=>{
                if(currentValue!=='0'  && operator===null){
                  setOperator("/")
                }
              }}
              theme="secondary"
              text="/"
              />
            </View>
            <View style={[styles.row,{paddingBottom:10}]}>
              <Button
              onPress={()=>valButtonPressed({text:"0"})}
              theme="secondary"
              text="0"
              />
              <Button
              onPress={answer}
              theme="secondary"
              text="="
              />
              <Button
              onPress={()=>valButtonPressed({text:"."})}
              theme="secondary"
              text="."
              />
            </View>
          </View>
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultScreen:{
    backgroundColor:"#1d1d1d",
    height:"40%",
  },
  btns:{
    backgroundColor:"#f5f5f5",
    height:"65%",
  },
  row:{
    flexDirection:"row",
    paddingHorizontal:5,
  },
  resValue:{
    color:"white",
    fontSize:40,
    position:"absolute",
    bottom:20,
    right:20,
    marginLeft:40
  }
});
