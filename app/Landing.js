import React, {Component} from 'react';
import {StyleSheet, Text, View, 
    TouchableWithoutFeedback, StatusBar,
    SafeAreaView, Keyboard, TouchableOpacity,
    Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';
import Contact from './Contact';
import Profile from './Profile';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

const sendIcon = (
    <Icon
        name="send" 
        size={70} 
        color="#536dfe" 
    />
)

const cardIcon = (
    <Icon
        name="credit-card" 
        size={70} 
        color="#00e676" 
    />
)

const transactIcon = (
    <Icon
        name="format-list-numbered" 
        size={70} 
        color="#d500f9" 
    />
)

const ratesIcon = (
    <Icon
        name="insert-chart" 
        size={70} 
        color="rgb(9, 156, 186)" 
    />
)

const chatIcon = (
    <Icon
        name="chat" 
        size={30} 
        color="white" 
    />
)


class LogoTitle extends React.Component {
    render() {
        return (
        <Image
            source={require('../images/swift.png')}
            style={{ width: 100, height: 150, marginLeft: 150, marginTop:-40 }}
        />
        );
    }
}

export default class Landing extends Component{
    static navigationOptions = {
        header:null
    }
    onPress() {
        this.props.navigation.navigate('Profile');
    }    

    constructor() {
        super();
        this.state = {
          language: '',
        };
    }

    render(){
        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content"/>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <View style={styles.head}>
                                <LogoTitle />
                            </View>
                            <View style={styles.myView}>
                                <Text style={styles.myText}>Welcome Leon Lishenga</Text>
                            </View>
                            <View style={styles.container}>
                                <TouchableHighlight 
                                    onPress={this.onPress} 
                                    style={styles.v1}
                                    underlayColor='blue'
                                    >
                                    <View style={styles.send}>{sendIcon}
                                        <Text style={styles.sendText}>Send Money</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.container}>
                                <TouchableHighlight 
                                    onPress={this.onPress} 
                                    style={styles.v1}
                                    underlayColor='blue'
                                    >
                                    <View style={styles.card}>{cardIcon}
                                        <Text style={styles.cardText}>Cards</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.v2}
                                    onPress={this.onPress2}
                                    >
                                    <View style={styles.transact}>{transactIcon}
                                        <Text style={styles.transactText}>Transactions</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.container}>
                                <TouchableHighlight 
                                    onPress={this.onPress} 
                                    style={styles.v1}
                                    underlayColor='blue'
                                    >

                                    <View style={styles.rates}>{ratesIcon}
                                        <Text style={styles.ratesText}>Rates</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <Image style={styles.logo} source={require('../images/lady3.jpg')}>
                                    
                            </Image>
                            <TouchableOpacity style={styles.buttonContainer}  onPress={() => {this.onPress()}}>
                                <Text style={styles.buttonText}>{chatIcon}</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containers:{
        flex: 3,
        backgroundColor: 'rgb(219, 220, 221)',
        margin: 10,
        marginBottom: 100,
        marginTop: 100,
        borderWidth: 1,
        borderColor: '#999',
        flexDirection: 'column'
    },
    myView: {
        backgroundColor: '#01a08b',
        height: 70
    },
    head: {
        backgroundColor: 'white',
        height: 70
    },
    myText:{
        color:'black',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 17,
    },
    sendText:{
        color:'black',
        marginTop: 0,
        fontSize: 17,
        marginLeft: -20
    },
    ratesText:{
        color:'black',
        marginTop: 0,
        fontSize: 17,
        marginLeft: 10
    },
    cardText:{
        color:'black',
        marginTop: 0,
        fontSize: 17,
        marginLeft: 10
    },
    transactText:{
        color:'black',
        marginTop: 0,
        fontSize: 17,
        marginLeft: -20
    },
    container:{
        flexDirection:'row',
        height: 130,
    },
    v1:{
        flex:1,
        backgroundColor:'white',
        padding:10,
        borderWidth: 1,
        borderColor: '#999',
    },
    v2:{
        flex:1,
        backgroundColor:'white',
        padding:10, 
        borderWidth: 1,
        borderColor: '#999',
    },
    v3:{
        flex:1,
        backgroundColor:'yellow',
        padding:10
    },
    send:{
        textAlign:'center',
        marginLeft: 170,
        marginTop: 20
    },
    card:{
        textAlign:'center',
        marginLeft: 60,
        marginTop: 20
    },
    transact:{
        textAlign:'center',
        marginLeft: 60,
        marginTop: 20
    },
    rates:{
        textAlign:'center',
        marginLeft: 170,
        marginTop: 20
    },
    buttonContainer:{
        backgroundColor: '#01a08b',
        paddingVertical: 18,
        width: 70,
        marginLeft: 300,
        marginTop: -100,
        borderRadius: 200
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    logo:{
        width: 400,
        height: 140
    },

})