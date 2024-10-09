import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Dashboard() {
  return (
    
    <View >
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
            
          
            <View style={styles.budgetContainer}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: 'outfit-medium',
                    color:Colors.WHITE
                }}>PHP 100,000.00</Text>
                <Text style={{
                    textAlign: 'center',
                    color: 'orange',
                    fontFamily: 'outfit-bold',
                    fontSize: 12,
                }}>Annual Budget</Text>
            </View>

            {/* Budget Details Container */}
            <View style={styles.detailsContainer}>
                <View style={styles.ppmp}>
                    <Text style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 25,
                        textAlign: 'center',
                        color: 'white',
                    }}>2023 PPMP</Text>
                </View>
            </View>
        </View>
        <View style={styles.ppmptracker}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 15,
                textAlign:'center',
                color:Colors.WHITE,
            }}>PPMP Tracker</Text>
            <Text style={{
                 color:Colors.WHITE,
                 fontSize: 13,
            }}>PPMP Submitted</Text>
            <Text style={{
                 color:Colors.WHITE,
                 fontSize: 13,
            }}>PPMP Tracker</Text>
            <Text style={{
                 color:Colors.WHITE,
                 fontSize: 13,
            }}>Date Approved</Text>
        </View>

        <View style={styles.prtracker}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 15,
                textAlign:'center',
                color:Colors.WHITE,
            }}>Purchase Tracker</Text>
            <Text style={{
                 color:Colors.WHITE,
                 fontSize: 13,
            }}>PPMP Submitted</Text>
            <Text style={{
                 color:Colors.WHITE,
                 fontSize: 13,
            }}>PPMP Tracker</Text>
            <Text style={{
                 color:Colors.WHITE,
                 fontSize: 13,
            }}>Date Approved</Text>
        </View>

        <View style={styles.catalogue}>
            <Text style={styles.title}>CATALOGUE</Text>
            {/* Header Row */}
            <View style={styles.row}>
                <Text style={styles.header}>Name</Text>
                <Text style={styles.header}>Description</Text>
                <Text style={styles.header}>Unit</Text>
                <Text style={styles.header}>Price</Text>
            </View>
            <View style={styles.category}>
                <Text style={styles.catitle}>Category</Text>
            </View>

            {/* Data Rows */}
            <View style={styles.row}>
                <Text style={styles.cell}>Item 1</Text>
                <Text style={styles.cell}>Description of Item 1</Text>
                <Text style={styles.cell}>Units</Text>
                <Text style={styles.cell}>$10.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.cell}>Item 2</Text>
                <Text style={styles.cell}>Description of Item 2</Text>
                <Text style={styles.cell}>Units</Text>
                <Text style={styles.cell}>$15.00</Text>
            </View>
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
    },
    budgetContainer: {
        flex: 1, 
        backgroundColor: '#003566',
        borderRadius: 5,
        padding: 10, 
        marginRight: 5,
        padding:15, 
    },
    detailsContainer: {
        flex: 1, 
        backgroundColor: '#003566',
        borderRadius: 5,
        padding: 10, 
    },
    ppmp: {
        marginTop: 5,
    },
    ppmptracker:{
        
        padding:15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#003566',
        borderRadius: 5,
        
    },
    prtracker:{
        marginTop:15,
        padding:15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#003566',
        borderRadius: 5,
        
    },
    catalogue: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#003566', // Background color for the table
        borderRadius: 5, // Rounded corners
        padding: 5,
    },
    row: {
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Space out items in the row
        paddingVertical: 5, // Vertical padding for each row
        backgroundColor: 'white', // Change background color of rows to white
    },
    header: {
        fontFamily: 'outfit-bold',
        fontSize: 13,
        textAlign: 'center',
        color: '#003566', // Change header text color to match the overall theme
        flex: 1, // Allow header to grow
    },
    cell: {
        color: '#003566', // Change cell text color to match the overall theme
        fontSize: 13,
        flex: 1, // Allow cells to grow and fill space evenly
        textAlign: 'center', // Center text in each cell
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10, // Space below title
    },
    category:{
        backgroundColor: '#003566',
        
    },
    catitle: {
        fontFamily: 'outfit-medium',
        fontSize: 13,
        textAlign: 'center',
        color: 'white', // Space below title
    },
})