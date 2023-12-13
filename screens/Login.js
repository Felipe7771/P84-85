import {View,
        TouchableOpacity,
         TextInput,
          Text,
          Image,
          StyleSheet,
          Alert} from 'react-native';

import firebase from 'firebase';
import { Component } from 'react';

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");

export default class LoginScreen extends Component{
    constructor(){
        super();
        this.state = ({
            email: "",
            password: ""
        });
    }

    handleLogin = async(password, email) => {
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
            this.props.navigation.navigate('BottonTab')
        }).catch(error => {
            Alert.alert(error.message);
        });
    }
    render(){
        return(
        <View>
            <Image source={appIcon} style={styles.appIcon}/>
            <Text style={styles.title}>Tela de Login</Text>

            <View>
                <TextInput style={styles.textinput}
                placeholder='Email de Acesso'
                placeholderTextColor={'#FFFFFF'}
                value={email}/>
            </View>
            <View style={{margin: 25}}>
                <TextInput style={styles.textinput}
                placeholder='Senha de Cadastro'
                placeholderTextColor={'#FFFFFF'}/>
                value={password}
            </View>
            <View style={{margin: 40}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>


        )
        
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: "Rajdhani_600SemiBold",
        paddingTop: 20,
        color: "#4C5D70"
      },
    
      appIcon: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginTop: 80
      },

      textinput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#4C5D70",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#F88379",
        fontFamily: "Rajdhani_600SemiBold",
        color: "#FFFFFF"
      },

      button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBE5C0",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#4C5D70"
      },
      buttonText: {
        fontSize: 24,
        color: "#4C5D70",
        fontFamily: "Rajdhani_600SemiBold"
      },
})