import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const handleSignIn = async () => {
        try {
            const response = await fetch('http://172.28.48.51:5000/api/signin', { // Replace with your server URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Handle successful login
                Alert.alert('Login Successful', data.message);
                router.push('(tabs)/dashboard'); // Navigate to the dashboard
            } else {
                // Handle errors (like invalid credentials)
                Alert.alert('Login Failed', data.message);
            }
        } catch (error) {
            console.error('Error signing in:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <View style={{ padding: 25, paddingTop: 40, backgroundColor: '#003566', height: '100%' }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 15, color: Colors.WHITE, textAlign: 'center' }}>
                WELCOME TO CTU-AC REQUEST MONITORING SYSTEM
            </Text>

            <View style={styles.container}>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, textAlign: 'center', color: '#003566' }}>SIGN IN</Text>
                    <Text style={{ fontFamily: 'outfit' }}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='CTU ID'
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: 'outfit' }}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder='Enter password'
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={{ fontFamily: 'outfit' }}>Forgot password?</Text>
                </View>

                <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
                    <Text style={{ color: Colors.WHITE, textAlign: 'center' }}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.replace('auth/sign-up')}
                    style={styles.createAccountButton}
                >
                    <Text style={{ color: Colors.PRIMARY, textAlign: 'center' }}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        fontFamily: 'outfit',
        color: 'black',
    },
    container: {
        padding: 15,
        width: '100%',
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        borderColor: 'black',
    },
    signInButton: {
        padding: 15,
        backgroundColor: '#003566',
        borderRadius: 15,
        marginTop: 30,
    },
    createAccountButton: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
    },
});
