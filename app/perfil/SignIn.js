import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import Toast from 'react-native-easy-toast';
import { useNavigation } from '@react-navigation/native';

export default function Signin() {
  const toastRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.body}>
        <Text style={styles.headerText}>Crea tu cuenta</Text>
        <FormRegistro toastRef={toastRef} />
        <Toast ref={toastRef} position="center" opacity={0.9} />
      </View>
      <View style={styles.footer}>
      </View>
    </SafeAreaView>
  );
}

function FormRegistro({ toastRef }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const navigation = useNavigation();

  const registrar = () => {
    if (!nombre || !email || !contraseña || !confirmarContraseña) {
      toastRef.current.show('Por favor, llene todos los campos', 2000);
      return;
    }

    if (contraseña.length < 6) {
      toastRef.current.show('La contraseña debe tener al menos 6 caracteres', 2000);
      return;
    }

    if (contraseña !== confirmarContraseña) {
      toastRef.current.show('Las contraseñas no coinciden', 2000);
      return; // Evitar enviar el formulario si las contraseñas no coinciden
    }

    console.log({ nombre, email, contraseña, confirmarContraseña });
    toastRef.current.show('Usuario registrado con éxito', 2000);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contraseña}
        onChangeText={setContraseña}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry={true}
        value={confirmarContraseña}
        onChangeText={setConfirmarContraseña}
      />
      <TouchableOpacity style={styles.button} onPress={registrar}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 60,
    backgroundColor: '#90A407',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
  },
  form: {
    justifyContent: 'center',
    marginTop: -10, // Ajusta este valor según tu preferencia para reducir el espacio entre el título y los campos
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20, // Ajusta este valor según tu preferencia para reducir el espacio entre los campos
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20, // Ajusta este valor según tu preferencia para reducir el espacio entre los campos y el botón
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    height: 60,
    backgroundColor: '#90A407',
    justifyContent: 'center',
    alignItems: 'center',
  },
});








