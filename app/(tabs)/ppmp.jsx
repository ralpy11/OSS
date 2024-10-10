import { View, Text, StyleSheet,Image, TouchableOpacity, FlatList, } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Colors } from '../../constants/Colors'

export default function PPMP() {
  const [selectedYear, setSelectedYear] = useState(null); // Initially null for "Select Year"
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Updated years array to include 2018 to 2025
  const years = [ 2021, 2022, 2023, 2024, 2025];

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setDropdownVisible(false);
  };
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

            {/* Budget Details Container */}
            <View style={styles.ppmpContainer}>
                <View style={styles.ppmp}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'outfit-bold',
                        fontSize: 12,
                    }}>2019 PPMP</Text>
                </View>
            </View>
            <View style={styles.ppmpContainer}>
                <View style={styles.ppmp}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'outfit-bold',
                        fontSize: 12,
                    }}>2018 PPMP</Text>
                </View>
            </View>
        </View>
        <View style={styles.yearContainer}>
      <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)} style={styles.dropdownButton}>
        <Text style={styles.yearText}>
          {selectedYear !== null ? selectedYear : 'Select Year'}
        </Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <FlatList
          data={years}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleYearSelect(item)} style={styles.yearOption}>
              <Text style={styles.yearOptionText}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.dropdownList}
        />
      )}
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
      <Text style={{ padding: 15 }}>Total Allocated Budget</Text>
      <Text style={{
        borderWidth: 1,
        padding: 6,
        width: 160,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 15,
      }}>
        Php 100,000.00
      </Text>
</View>

<View style={styles.catalogue}>
         
            <View style={styles.row}>
                <Text style={styles.header}>Name</Text>
                <Text style={styles.header}>Description</Text>
                <Text style={styles.header}>Budget</Text>
                <Text style={styles.header}>Month</Text>
                <Text style={styles.header}>Unit</Text>
                <Text style={styles.header}>Price</Text>
            </View>

</View>
<View style={styles.row2}>
    <Text style={styles.cell}>Sabon</Text>
    <Text style={styles.cell}>Humot</Text>
    <Text style={styles.cell}>70.00</Text>
    <Text style={styles.cell}>Jan</Text>
    <Text style={styles.cell}>10</Text>
    <Text style={styles.cell}>7.00</Text>
</View>
<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '85%', margin: 15,}}>
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
  ppmpContainer: {
      flex: 1, 
      backgroundColor: '#003566',
      borderRadius: 5,
    
      marginRight: 5,
      padding:15,  
  },
  yearContainer: {
    position: 'relative',
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 15,
    height: 50,
  },
  dropdownButton: {
    padding: 10,
  },
  yearText: {
    fontFamily: 'outfit-medium',
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 5,
  },
  dropdownList: {
    position: 'absolute',
    top: 55, // Adjust if needed
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: 200,
    zIndex: 1,
  },
  yearOption: {
    padding: 10,
  },
  yearOptionText: {
    fontSize: 16,
    textAlign: 'center',
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

  

});
