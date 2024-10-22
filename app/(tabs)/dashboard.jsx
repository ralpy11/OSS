import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Dashboard() {
    const [username, setUsername] = useState('');
    const [budget, setBudget] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedUserData = await AsyncStorage.getItem('userData');
                if (storedUserData) {
                    const user = JSON.parse(storedUserData);
                    setUsername(user.username);
                    setBudget(user.budget);
                }
            } catch (error) {
                console.error("Error retrieving user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={Colors.WHITE} />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={styles.main}>
                <Image
                    source={require('./../../assets/images/CTU.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.content}></View>
                <Ionicons name="notifications" size={24} color="white" />
                <Ionicons name="person-circle-outline" size={27} color="white" />
            </View>

            <View style={styles.container}>
                <View style={styles.budgetContainer}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'outfit-medium',
                        color: Colors.WHITE
                    }}>
                        {budget !== null ? `PHP ${budget.toLocaleString()}` : 'No budget data'}
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        color: 'orange',
                        fontFamily: 'outfit-bold',
                        fontSize: 12,
                    }}>
                        Annual Budget
                    </Text>
                </View>

            
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
                    textAlign: 'center',
                    color: Colors.WHITE,
                }}>PPMP Tracker</Text>
                <Text style={{ color: Colors.WHITE, fontSize: 13 }}>PPMP Submitted</Text>
                <Text style={{ color: Colors.WHITE, fontSize: 13 }}>PPMP Tracker</Text>
                <Text style={{ color: Colors.WHITE, fontSize: 13 }}>Date Approved</Text>
            </View>

            <View style={styles.prtracker}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 15,
                    textAlign: 'center',
                    color: Colors.WHITE,
                }}>Purchase Tracker</Text>
                <Text style={{ color: Colors.WHITE, fontSize: 13 }}>PPMP Submitted</Text>
                <Text style={{ color: Colors.WHITE, fontSize: 13 }}>PPMP Tracker</Text>
                <Text style={{ color: Colors.WHITE, fontSize: 13 }}>Date Approved</Text>
            </View>

            <View style={styles.catalogue}>
                <Text style={styles.title}>CATALOGUE</Text>
               
                <View style={styles.row}>
                    <Text style={styles.header}>Name</Text>
                    <Text style={styles.header}>Description</Text>
                    <Text style={styles.header}>Unit</Text>
                    <Text style={styles.header}>Price</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.catitle}>Category</Text>
                </View>

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
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#003566',
        alignItems: 'center',
        padding: 10,
        marginTop: 25,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        padding: 15,
    },
    budgetContainer: {
        flex: 1,
        backgroundColor: '#003566',
        borderRadius: 5,
        padding: 15,
        marginRight: 5,
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
    ppmptracker: {
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#003566',
        borderRadius: 5,
    },
    prtracker: {
        marginTop: 15,
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#003566',
        borderRadius: 5,
    },
    catalogue: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#003566',
        borderRadius: 5,
        padding: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        backgroundColor: 'white',
    },
    header: {
        fontFamily: 'outfit-bold',
        fontSize: 13,
        textAlign: 'center',
        color: '#003566',
        flex: 1,
    },
    cell: {
        color: '#003566',
        fontSize: 13,
        flex: 1,
        textAlign: 'center',
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
    },
    category: {
        backgroundColor: '#003566',
    },
    catitle: {
        fontFamily: 'outfit-medium',
        fontSize: 13,
        textAlign: 'center',
        color: 'white',
    },
});
