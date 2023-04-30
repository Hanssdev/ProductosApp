import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';

export const LoginScreen = () => {
  return (
    <>
      {/* Background */}
      <Background />

      <View style={loginStyles.formContainer}>
        {/* Scroll view */}
        <WhiteLogo />

        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          style={[ loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIos ]}
          placeholder="Ingrese su email"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          selectionColor="gray"
          //To Do on change value
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={loginStyles.label}>Password:</Text>
        <TextInput
          style={[ loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIos ]}
          placeholder="*************"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          selectionColor="gray"
          //To Do on change value
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Boton login */}
        <View style={loginStyles.buttomContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Crear nueva cuenta */}
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('press')}>
            <Text style={loginStyles.buttonText}>Nueva Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
