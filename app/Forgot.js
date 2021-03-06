import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
     KeyboardAvoidingView} from 'react-native';

export default class Forgot extends Component{
   
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15}}>
                                    Forgot Password or Email Address?
                                </Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder='Email Address'
                                    placeholderTextColor="black"
                                    keyboardType="email-address"
                                    returnKeyType='Done'
                                    autoCorrect={false}
                                />
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(219, 220, 221)',
        flexDirection: 'column'
    },
    logoContainer:{
        marginTop: -200,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo:{
        width: 128,
        height: 50
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        padding: 20,
        marginBottom: 50
    },
    forgot:{
        marginLeft: 90,
        marginTop: 200,
    },
    input:{
        height: 60,
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonContainer:{
        backgroundColor: '#ec407a',
        paddingVertical: 15,
        width: 200,
        marginLeft: 90,
        borderRadius: 50
    }

})