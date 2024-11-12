import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../../constants/Colors';

export default function SignIn() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://10.0.2.2:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }

            const result = await response.json();
            console.log('Response:', result); 

            if (result && result.success) {
                await AsyncStorage.setItem('username', username);
                await AsyncStorage.setItem('userData', JSON.stringify(result.user));
                Alert.alert('Login successful!', `Welcome, ${username}!`);
                router.replace('/dashboard');
            } else {
                Alert.alert('Invalid credentials', 'Please check your username and password.');
            }
        } catch (error) {
            console.error('Error:', error); 
            Alert.alert('An error occurred', 'Please try again later.');
        } finally {
            setLoading(false);
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

                <TouchableOpacity onPress={handleSignIn} style={styles.signInButton} disabled={loading}>
                    <Text style={{ color: Colors.WHITE, textAlign: 'center' }}>{loading ? 'Signing In...' : 'Sign In'}</Text>
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
