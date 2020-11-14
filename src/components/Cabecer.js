import React from 'react';
import {  StyleSheet, TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Formulary from './Formulario';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImagenContainer: {
        alignItems:'center',
    },
    perfil: {
        color: '#FFF',
        fontSize:20
    },
    containerPerfil: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    btnEditImageProfile: {
        backgroundColor: '#e1e1e1',
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        marginLeft: 10
    },
    logo:{
        width:200,
        height:200,
        borderRadius:100,
        marginLeft:110,
        marginRight:110,
        marginTop:20
    },
    box2: {
        flex: 8,
        backgroundColor: '#F8F8FF',

    }
})

const Head = () => {

    const click = () => {
        alert('Esta funcionalidad aun no se encuentra habilitada');
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.ImagenContainer}>
                    <LinearGradient colors={['#FF0099', '#493240']}>
                        <TouchableOpacity onPress={click}>
                            <Image style={styles.logo}
                                source={require('../imagenes/imagen.jpg')}
                                />
                        </TouchableOpacity>
                        <View style={styles.containerPerfil}>
                            <TextInput
                                value='Ari Dugarte Melendez'
                                style={styles.perfil} />
                            <TouchableOpacity style={styles.btnEditImageProfile}>
                                <Image
                                    source={{
                                        uri: 'https://webstockreview.net/images/how-to-edit-png-images-14.png',
                                    }}
                                    style={{ width: 20, height: 20 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
                <View style={[styles.box2]}>
                    <Formulary/>                
                </View>
            </View>
        </>
    )
}

export default Head;