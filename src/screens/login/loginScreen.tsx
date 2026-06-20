import React, { useState } from 'react';
import {Text, View,Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import {styles} from './style'

import imagemPerfil from '../../assents/imagemPerfil.jpeg'

export default function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonHeader}>
          <Text style={styles.ButtonText}>...</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.Title}>
          Insira seu número de telefone
        </Text>

        <Text style={styles.instructionText}>
          O WhatsApp precisa verificar sua conta. Essa ação está sujeita a cobrança da sua operadora.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.countrySelect}>Brasil </Text>
          <View style={styles.phoneInputRow}>
            <Text style={styles.countryCode}>+55</Text>
            <TextInput 
              style={styles.input}
              placeholder="seu número de telefone"
              placeholderTextColor={'#6a6a6a'}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerButtonNext}>
        <TouchableOpacity style={styles.nextButton}onPress={() => navigation.navigate('Home')}>
          <Text style={styles.nextButtonText}>Avançar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerSeparador}>
        <View style={styles.line} />
        <Text style={styles.text}>ou</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Use uma conta do instagram para acessar o WhatsApp e economizar tempo.
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer}onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
        <View style={styles.avatarContainer}>
          <Image 
            source={imagemPerfil} 
            style={styles.avatarImage} 
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.topText}>Continuar com o Instagram</Text>
          <Text style={styles.usernameText}>Meneguelli</Text>
        </View>

        <Text style={styles.arrowIcon}> 〉</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

