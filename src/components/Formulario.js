import React from 'react';
import { StyleSheet, ScrollView, Image, View, Text, TextInput } from 'react-native';
import SaveButton from './Button'

const styles = StyleSheet.create({
    cardProfileContainer: {
        flex: 1,
        marginHorizontal: 25,
        marginBottom: 15,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 2
    },
    titleProfile: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    labelCard: {
        color: 'purple',
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 5,
        marginTop: 10
    },
    textContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: "#e1e1e1",
        borderRadius: 25,
        paddingLeft: 5,
        //paddingVertical: 5
    },
    textCard: {
        marginLeft: 5
    },
    iconCard: {
        width: 30,
        height: 30,
        marginTop: 10,
        marginLeft: 10
    },
})


const Formulary = () => {



    return (
        <>
            <ScrollView style={styles.cardProfileContainer}>
                <View>
                    <Text style={styles.titleProfile}>USER PROFILE</Text>
                </View>
                <View>
                    <Text style={styles.labelCard}>User Name</Text>
                    <View style={styles.textContainer}>
                        <Image
                            source={{
                                uri: 'https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png',
                            }}
                            style={styles.iconCard}
                        />
                        <TextInput
                            placeholder="Enter User Name"
                            style={styles.textCard}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.labelCard}>Email-Id</Text>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../imagenes/correo.png')}
                            style={styles.iconCard}
                        />
                        <TextInput
                            placeholder="Enter email"
                            style={styles.textCard}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.labelCard}>Mobile Number</Text>
                    <View style={styles.textContainer}>
                        <Image
                            source={{
                                uri: 'https://listimg.pinclipart.com/picdir/s/129-1294634_mobile-phone-icon-black-and-white-download-mobile.png',
                            }}
                            style={styles.iconCard}
                        />
                        <TextInput
                            placeholder="Enter your 10 digit mobile number"
                            style={styles.textCard}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.labelCard}>Date of Birth</Text>
                    <View style={styles.textContainer}>
                        <Image
                            source={{
                                uri: 'https://cdn.onlinewebfonts.com/svg/img_247795.png',
                            }}
                            style={styles.iconCard}
                        />
                        <TextInput
                            placeholder="DD/MM/YYYY"
                            style={styles.textCard}
                        />
                    </View>
                </View>
                <View>
                    <SaveButton />
                </View>

            </ScrollView>
        </>
    )
}

export default Formulary;