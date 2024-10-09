import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'


export default function Login() {
  const router=useRouter();
  return (
    <View>
        <Image source={require('./../assets/images/landing.jpg')}
            style={{
              width: '100%',
              height:430,
            }}/>

        <View style={styles.container}>
          <Text style={{
            fontSize:28,
            fontFamily:'outfit-bold',
            textAlign: 'center',
            marginTop:5,
          }}>CTU-AC REQUEST MONITORING SYSTEM</Text>
          <Text style={{
            fontFamily:'outfit',
            fontSize:15,
            textAlign: 'center',
            color:Colors.GRAY,
            marginTop: 20,
          }}>Welcome to the Request Monitoring System of CTU Argao! Our platform is designed to streamline the process of submitting and tracking requests within our institution.</Text>
          <TouchableOpacity style={styles.button}
              onPress={()=>router.push('/auth/sign-in')}>
            <Text style={{color:Colors.WHITE,
              textAlign: 'center',
              fontFamily: 'outfit',
              fontSize: 17,

            }}>Get Started</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    marginTop:-20,
    height:'100%',
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    padding:20,
  },

  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop: '10%',
  }


})