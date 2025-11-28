import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const navigation = useNavigation();

    const validate = () => {
        let valid = true;
        let newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email or mobile number is required';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleLogin = () => {
        if (validate()) {
            Alert.alert('Success', 'Logged in successfully!');
            console.log('Login:', { email, password, rememberMe });
        }
    };

    return (
        <LinearGradient colors={['#FD90D1', '#78ACF9']}
        start={{x:0,y:0}}
        end={{x:1,y:0.7}}
        locations={[0,1]}
        style={styles.container}>
            {/* Top Section with Logo */}
            <View style={styles.topSection}>
                    {/* <Text style={styles.logoText}>C</Text> */}
                    <View style={styles.logoContainer}>
                      <Image
                        source={require('../assets/image.png')}
                        style={styles.logoImage}
                      />
                    </View>
                <Text style={styles.brandName}>Cerope</Text>
            </View>

            {/* Bottom Section with Form */}
            <View style={styles.formContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.welcomeText}>Welcome Back To Cerope</Text>
                        <Text style={styles.subtitleText}>Your personalized fashion journey awaits.</Text>
                    </View>

                    {/* Email Input */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email address"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                        />
                        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#999"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#999"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                    </View>

                    {/* Remember Me & Forgot Password */}
                    <View style={styles.rememberRow}>
                        <TouchableOpacity
                            style={styles.rememberButton}
                            onPress={() => setRememberMe(!rememberMe)}
                        >
                            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
                            <Text style={styles.rememberText}>Remember me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLogin}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    {/* OR Divider */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Google Button */}
                    <TouchableOpacity style={styles.googleButton}>
                        <Text style={styles.googleButtonText}>G Google</Text>
                    </TouchableOpacity>

                    {/* Sign Up Link */}
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login",{referrer:"Registration"})}>
                            <Text style={styles.signupLink}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gradient', // blue-500
       
    },
    topSection: {
        height: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: 80,
        height: 80,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    brandName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 16,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    subtitleText: {
        fontSize: 14,
        color: '#6B7280',
    },
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        padding: 12,
        color: '#000',
        fontSize: 16,
    },
    errorText: {
        color: '#EF4444',
        fontSize: 12,
        marginTop: 4,
    },
    rememberRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    rememberButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#9CA3AF',
        marginRight: 8,
        backgroundColor: '#FFF',
    },
    checkboxChecked: {
        backgroundColor: '#000',
    },
    rememberText: {
        color: '#4B5563',
        fontSize: 14,
    },
    forgotText: {
        color: '#3B82F6',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#000',
        borderRadius: 999,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 24,
    },
    loginButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#D1D5DB',
    },
    dividerText: {
        marginHorizontal: 16,
        color: '#9CA3AF',
    },
    googleButton: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 32,
    },
    googleButtonText: {
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    signupText: {
        color: '#6B7280',
    },
    signupLink: {
        color: '#3B82F6',
        fontWeight: 'bold',
    },
    logoImage: {
        width: 150,
        resizeMode: 'contain',
    },
});

export default Registration;
