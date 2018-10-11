import React, {Component} from 'react';
import {StyleSheet, Text, View, 
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    Picker, Modal, TouchableHighlight} from 'react-native';

export default class Create extends Component{
    static navigationOptions = {
        title: 'CREATE ACCOUNT',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            marginLeft: 60
        },
    }

    constructor() {
        super();
        this.state = {
          language: '',
        };
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder='First Name'
                                    placeholderTextColor="black"
                                    keyboardType="default"
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder='Last Name'
                                    placeholderTextColor="black"
                                    keyboardType="default"
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword1.focus()}
                                    ref={"txtPassword"}
                                />
                                <TextInput style={styles.input}
                                    placeholder='Email Address'
                                    placeholderTextColor="black"
                                    keyboardType="email-address"
                                    returnKeyType='next'
                                    onSubmitEditing={()=> this.refs.txtPassword2.focus()}
                                    autoCorrect={false}
                                    ref={"txtPassword1"}
                                />
                                <Picker
                                    style={styles.inputs}
                                    selectedValue={this.state.language}
                                    style={{ height: 50, width: 370, backgroundColor: 'white', marginBottom: 20 }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                    <Picker.Item label="USA" value="US" />
                                    <Picker.Item label="United Kingdom" value="UK" />
                                    <Picker.Item label="Kenya" value="KE" />
                                    <Picker.Item label="Canada" value="CA" />
                                </Picker>
                                <TextInput style={styles.input}
                                    placeholder='Phone Number'
                                    placeholderTextColor="black"
                                    keyboardType="numeric"
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword3.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder='Password'
                                    placeholderTextColor="black"
                                    secureTextEntry
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={"txtPassword3"}
                                />
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>CREATE</Text>
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
    infoContainer:{
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        padding: 20,
    },
    input:{
        height: 60,
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 20,
        fontSize: 17,
        paddingHorizontal: 10
    },
    inputs:{
        backgroundColor: 'white',
        color: 'black',
        bottom: 20,
        position: 'absolute',
        right: 20,
        left: 20,
        marginBottom: 300, 
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