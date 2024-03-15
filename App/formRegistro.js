import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Toast from 'react-native-easy-toast';

export default function Signin() {
  const toastRef = useRef();

  return (
    <View style={styles.body}>
      <View style={styles.formulario}>
        <FormRegistro toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}

function FormRegistro({ toastRef }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const registrar = () => {
    // Aquí iría la lógica para registrar el usuario, por ejemplo, validaciones o enviar los datos a un servidor.
    console.log({ nombre, email, contraseña });
    toastRef.current.show('Usuario registrado con éxito', 2000); // Muestra el toast durante 2 segundos.
  };

  return (
    <View>
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
      <Button title="Registrar" onPress={registrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  formulario: {
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
  },
});