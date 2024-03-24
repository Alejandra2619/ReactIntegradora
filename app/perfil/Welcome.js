import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Principal() {
  const navegacion = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.yCgFK5850MWFYwKIo6VwZgHaFJ?rs=1&pid=ImgDetMain' }}
        style={styles.image}
      />
      <View style={styles.separator} />
      <Text style={styles.title}>Green Guardian</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod augue eget enim convallis, in eleifend dolor tempus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod augue eget enim convallis, in eleifend dolor tempus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod augue eget enim convallis, in eleifend dolor tempus.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#736934' }]} onPress={() => navegacion.navigate('Login')}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  header: {
    width: '150%',
    height: 60,
    backgroundColor: '#94a318',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  text: {
    textAlign: 'justify',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  },
  button: {
    backgroundColor: '#94a318',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#94a318',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 20,
  },
});