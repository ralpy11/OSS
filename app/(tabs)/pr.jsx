import { View, Text, StyleSheet,Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors'

export default function pr() {
  return (
    <View>
      <View style={styles.main}>
              <Image 
              source={require('./../../assets/images/CTU.png')}
              style={styles.logo} 
              resizeMode="contain"/>
              <View style={styles.content}>
                
              </View>
              
              <Ionicons name="notifications" size={24} color="white" />
              <Ionicons name="person-circle-outline" size={27} color="white" />
        </View>
        <View style={styles.container}>
            
          
            <View style={styles.catalogueContainer}>
                <Text style={{
                    textAlign: 'center',
                    color: 'orange',
                    fontFamily: 'outfit-bold',
                    fontSize: 12,
                }}>Catalogue</Text>
            </View>
        </View>
        <View style={styles.catalogue}>
    <View style={styles.row}>
        <Text style={styles.header}>Name</Text>
        <Text style={styles.header}>Description</Text>  
        <Text style={styles.header}>Unit</Text>
        <Text style={styles.header}>Price</Text>
        <Text style={styles.header}>Price</Text>
    </View>
</View>
<View style={styles.row2}>
        <Text style={styles.cell}>Sabon</Text>
        <Text style={styles.cell}>Humot</Text>
        <Text style={styles.cell}>pcs</Text>
        <Text style={styles.cell}>7.00</Text>
        <Text style={styles.cell}>10</Text>

    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'100%',marginLeft:15,}}>
    <Text style={{ marginRight: 10, fontWeight: 'bold', }}>Purpose</Text>
  <TextInput style={{
    borderWidth: 2,
    textAlign: 'center',
    width:270,
    padding: 3,
    marginRight: 10,
    
  }}
  placeholder='State the Purpose'>
    
  </TextInput>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center',margin: 15,}}>
  <Text style={{ marginRight: 10, fontWeight: 'bold', }}>Total Amount</Text>
  <Text style={{
    borderWidth: 2,
    textAlign: 'center',
    width:150,
    padding: 5,
    marginRight: 10,
    fontWeight: 'bold', // Add some space between the amount and the submit button
  }}>
    Php 70.00
  </Text>
  <Text style={{
    borderWidth: 1,
    padding: 5,
    width:80,
    textAlign: 'center',
    backgroundColor: '#003566',
    color: 'orange',
    fontWeight: 'bold',

  }}>
    Submit
  </Text>
</View>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#003566', 
    alignItems: 'center',
    padding: 10,
    marginTop:25, 
},
logo: {
    width: 40, 
    height: 40, 
    marginRight: 10, 
},
content: {
  flex: 1, 
},
icons: {
    flexDirection: 'row',
    alignItems: 'center', 
},
container: {
  flexDirection: 'row',
  justifyContent: 'space-between', 
  paddingTop: 15,
  padding:15,
  height: 80,
},
catalogueContainer: {
  flex: 1, 
  backgroundColor: '#003566',
  borderRadius: 5,
 
  marginRight: 5,
  padding:15, 
},

row: {
flexDirection: 'row', // Align items horizontally
justifyContent: 'space-between', // Space out items in the row
paddingVertical: 5, 

},
row2:{
flexDirection: 'row', // Align items horizontally
justifyContent: 'space-between', // Space out items in the row
paddingVertical: 5, 
backgroundColor:Colors.WHITE,
padding: 5,
textAlign: 'center',
},


catalogue: {
marginTop: 10,
backgroundColor: '#003566', // Background color for the table
padding: 5,
},
header:{
color:Colors.WHITE,
padding: 3,
},


})