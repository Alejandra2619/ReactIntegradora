import { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

export default function RegistroPlantas() {
    const [plantas, setPlantas] = useState([
        { nombre: "Planta 1", encendida: false },
        { nombre: "Planta 2", encendida: false },
        { nombre: "Planta 3", encendida: false },
        { nombre: "Planta 4", encendida: false },
        // Agrega más plantas según sea necesario
    ]);

    const toggleEstadoPlanta = (index) => {
        setPlantas((prevPlantas) => {
            const nuevasPlantas = [...prevPlantas];
            nuevasPlantas[index].encendida = !prevPlantas[index].encendida;
            return nuevasPlantas;
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Control de riego</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.listaPlantas}>
                    {plantas.map((planta, index) => (
                        <View key={index} style={styles.plantaItem}>
                            <Text style={[styles.plantaNombre, planta.encendida ? styles.encendida : styles.apagada]}>
                                {planta.nombre}
                            </Text>
                            <Switch
                                value={planta.encendida}
                                onValueChange={() => toggleEstadoPlanta(index)}
                            />
                        </View>
                    ))}
                </View>
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
    content: {
        flex: 1,
    },
    listaPlantas: {
        alignItems: 'center',
    },
    plantaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    plantaNombre: {
        marginRight: 10,
        fontSize: 16,
    },
    encendida: {
        color: 'green',
    },
    apagada: {
        color: 'red',
    },
    footer: {
        backgroundColor: '#94a318',
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '120%',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

