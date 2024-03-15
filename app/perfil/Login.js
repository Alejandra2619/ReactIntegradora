import React, {useRef} from "react";
import {useNavigation} from "@react-navigation/native";
import { View, Text,Image, ScrollView,StyleSheet } from "react-native"

import Toast from 'react-native-easy-toast';


export default function Login(){
    const navegacion=useNavigation();


    const toastRef=useRef();

    return(
        <ScrollView>
                <Image
                source={require("../../../assets/img/plantita.jpg")}
                resizeMethod="auto"
                style={styles.usuario} />
        
         <View style={styles.contenedor}>
         <View style={styles.formulario}>



         </View>
    <Toast ref={toastRef} position="center" opacity={0.9}/>

<Text style={styles.textRegistrar}> ¿Aún no tienes una cuenta?{" "}
<Text
style={styles.link}
onPress={() => navegacion.navigate("registrar")}>Regístrate
</Text>
</Text>
</View>

        </ScrollView>
    );


}

const styles = StyleSheet.create({
    usuario: {
    width:"100%",
    height:260,
    marginTop:10,
    },
    contenedor: {
    marginRight:40,
    marginLeft:40,
    },
    textRegistrar: {
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    },
    link: {
        color:"#996632",
        fontWeight:"bold",
        }

    })
