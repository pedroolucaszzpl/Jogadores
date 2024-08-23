import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import app from '../firebaseConfig'; // Importar a configuração do Firebase

const Jogadores = ({ navigation }) => {
    const [jogadores, setJogadores] = useState([]);

    useEffect(() => {
        const db = getFirestore(app);
        const jogadoresCollection = collection(db, 'real-madrid');

        const unsubscribe = onSnapshot(jogadoresCollection, querySnapshot => {
            const jogadoresList = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    nome: data.nome || 'N/A',
                    posicao: data.posicao || 'N/A',
                    camisa: data.camisa || 'N/A',
                    nascimento: formatDate(data.nascimento) || 'N/A',
                    altura: data.altura|| 'N/A'
                };
            });
            setJogadores(jogadoresList);
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    // Função para formatar data
    const formatDate = (timestamp) => {
        if (timestamp && timestamp.seconds) {
            const date = new Date(timestamp.seconds * 1000);
            return date.toLocaleDateString();
        }
        return 'N/A';
    };

    // Função para formatar números (apenas altura)
    const formatNumber = (value) => {
        return typeof value === 'number' ? value.toString() : 'N/A';
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.info}>Camisa: {item.camisa}</Text>
            <Text style={styles.info}>Nascimento: {item.nascimento}</Text>
            <Text style={styles.info}>Altura: {item.altura} cm</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Jogadores</Text>
            <FlatList
                data={jogadores}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE5A8', // Branco, cor principal do Real Madrid
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#004B87', // Azul escuro do Real Madrid
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dcdcdc', // Borda sutil
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#004B87', // Azul escuro do Real Madrid
        marginBottom: 4,
    },
    position: {
        fontSize: 18,
        color: '#7D8C99', // Cinza azulado
        marginBottom: 8,
    },
    info: {
        fontSize: 16,
        color: '#4A4A4A',
        marginBottom: 4,
    },
});

export default Jogadores;
