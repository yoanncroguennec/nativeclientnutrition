import { useRouter } from 'expo-router'
import React, { useContext, useState } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import Toast from 'react-native-toast-message'
import * as Animatable from 'react-native-animatable'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// ICONS
import { Feather } from '@expo/vector-icons'
// STYLES
import stylesAuth from '../StylesGlobalAuth'

const bg_1 = require('@/assets/imgs/bg_1.png')

export default function LoginScreen() {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  async function handleAuth() {}

  // Styles
  const { bgColor, textInput, boxBtn, btn } = stylesAuth

  return (
    <KeyboardAwareScrollView // Pour éviter que le clavier ne cache les inputs, surtout dans des formulaires avec plusieurs champs de saisie.
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true} // Active la gestion du clavier sur Android (important)
      extraScrollHeight={20}
    >
      <ImageBackground resizeMode="cover" source={bg_1} style={{ flex: 1 }}>
        <View style={bgColor}>
          <Animatable.View
            animation="fadeIn"
            delay={100}
            duration={1500}
            useNativeDriver
          >
            {/* <Toast
        config={{
          success: props => <CustomToast {...props} />,
          error: props => <CustomToast {...props} />,
        }}
      /> */}
            {/* Email */}
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#F0F"
              style={textInput}
              value={email}
            />
            {/* Password */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                onChangeText={setPassword}
                placeholder="Mot de passe"
                placeholderTextColor="#F0F"
                secureTextEntry={!showPassword}
                style={textInput}
                value={password}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  color="#F0F"
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  style={{ marginLeft: -35 }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              disabled={loading} // Désactive le bouton pendant le chargemen
              onPress={handleAuth}
              style={boxBtn}
            >
              <Text style={btn}>
                {loading ? 'Chargement...' : 'Se connectez'}
              </Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
              <Text style={{ color: '#F0F', fontSize: 15 }}>
                Pas encore de compte ?{' '}
                <Text
                  onPress={() => router.push('/(auth)/register')}
                  style={{
                    color: '#F0F',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}
                >
                  S'inscrire
                </Text>
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => router.push('/(connected)/(tabs)')}
              style={{ alignItems: 'center', marginVertical: 20 }}
            >
              <Text
                style={{
                  borderColor: '#F0F',
                  borderRadius: 25,
                  borderWidth: 3,
                  color: '#F0F',
                  fontSize: 22,
                  fontWeight: 'bold',
                  padding: 5,
                  textAlign: 'center',
                  width: 200,
                }}
              >
                Application
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}
