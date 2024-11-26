import React from 'react'
import { Alert, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const imgUser = 'https://i.pinimg.com/564x/13/12/d2/1312d287e7de2dde6a6ccb8f4e3ddcd3.jpg'

export default function Header(props) {
    const navigation = useNavigation();
    const {user} = props;
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageUser}
                source={require('../../Assets/Images/logoImage.png')}
            />

            <Text style={styles.nameUser}>{user}</Text>
            <TouchableOpacity style={styles.iconButtonExit} onPress={() => navigation.navigate("Login")} >
                <Ionicons name="log-out-outline" size={30} color="#9400D3" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconButton}
                onPress={() => Alert.alert('Sem notificações')}
            >
                <Ionicons name="notifications-outline" size={30} color="#000" style={styles.iconNotification} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginLeft: 18
    },
    nameUser: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
        color: '#9400D3'
    },
    iconNotification: {
        color: '#9400D3',
        marginLeft: 10,
        marginTop: 10
    },
    iconButtonExit:{
        marginLeft: 190,
        marginTop: 10
    }
});
