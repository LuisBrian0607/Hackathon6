import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const styles = StyleSheet.create({
    Button_save: {
        flex:1,
        padding: 10,
        borderTopLeftRadius: 25,
        marginTop: 10,
        alignItems:'center',
        marginBottom:20,
        marginTop:20
    },
    texto:{
       textAlign:'center',
       padding:20,
       color: '#FFF',
       fontSize:20
    }
});

const SaveButton = () => {
    return (
        <>
            <LinearGradient colors={['#FF0099', '#493240']}>
                <TouchableOpacity style={[styles.Butoon_Save]} >
                    <Text style={styles.texto}>Save</Text>
                </TouchableOpacity>
            </LinearGradient>

        </>
    )
};
export default SaveButton;