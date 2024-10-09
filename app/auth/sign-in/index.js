import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
    const navigation=useNavigation();
    const router=useRouter();

    useEffect(()=>{

    
        navigation.setOptions({
            headerShown:false
    })
},[])
  return (
    <View style=
    {{
        padding:25,
        paddingTop:40,
        backgroundColor: '#003566',
        height:'100%',
    }}>
        <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={25} color="white" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:30,
        marginTop:15,
        color:Colors.WHITE,
        textAlign: 'center'
      }}>WELCOME TO CTU-AC REQUEST MONITORING SYSTEM</Text>

      <View  style={styles.container} >
      <View style={{
        marginTop:15,
        
      }}>
        <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:30,
        textAlign: 'center',
        color: '#003566'
      }}>SIGN IN</Text>
        <Text style={{
            fontFamily: 'outfit',
        }}>Email</Text>
        <TextInput
        style={styles.input} 
        placeholder='CTU ID'/>

      </View>

      <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontFamily: 'outfit',
            

        }}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        placeholder='Enter password'/>
        <Text style={{
            fontFamily: 'outfit',
        }}>Forgot password</Text>

      </View>

      <TouchableOpacity
        onPress={()=>router.push('(tabs)/dashboard')}
      style={{
        padding:15,
        backgroundColor: '#003566',
        borderRadius:15,
        marginTop:30,
      }}>
        <Text style={{
            color:Colors.WHITE,
            textAlign: 'center',
        }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>router.replace('auth/sign-up')}
      style={{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20,
        marginBottom:20,
        borderWidth:1,
      }}>
        <Text style={{
            color:Colors.PRIMARY,
            textAlign: 'center',
        }}>Create Account</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor: 'black',
        fontFamily: 'outfit',
        color: 'white',
    },
    container:{
      padding:15,
      width: '100%',
      backgroundColor:Colors.WHITE,
      borderRadius:15,
      borderColor: 'black',
    }
})