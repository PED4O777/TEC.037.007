import {View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '@/constants/globalStyles';

export default function Login () {
    return (
        <View style={estilos.container}>
        <Text>Página Login</Text>
        <Link style= {estilos.button} href="/detalhes">Detalhes</Link>
        </View>
    )
}
