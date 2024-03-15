import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Toast from 'react-native-easy-toast';

export default function Signin() {
  const toastRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
        <Text style={styles.headerText}>Crear nuevo usuario</Text>
          <FormRegistro toastRef={toastRef} />
          <Toast ref={toastRef} position="center" opacity={0.9} />
        </View>
      </ScrollView>
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
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contraseña}
        onChangeText={setContraseña}
      />
      <View style={styles.separator} />
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
    textAlign:'center',
    marginBottom: 75,
  },
  scrollView: {
    flex: 1,
  },
  body: {
    marginTop: 100,
    flex: 1,
    paddingHorizontal: 30,
  },
  form: {
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
  },
  separator: {
    height: 75,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 75,
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







