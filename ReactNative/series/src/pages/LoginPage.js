import React from 'react'
import {View, Text, Button, ActivityIndicator, Alert} from 'react-native'
import FormRow from '../components/FormRow'
import {TextInput} from 'react-native-gesture-handler';
import {styleLoginPage} from '../components/Style'
import firebase from 'firebase'


export default class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: '',
            isLoading: false,
            message: '',
        }
    }

    componentDidMount(){
        // Initialize Firebase
        const config = {
        apiKey: "AIzaSyABbUhNgrPjS8oXWwNSyBLhYt2_scyfFbo",
        authDomain: "series-rn.firebaseapp.com",
        databaseURL: "https://series-rn.firebaseio.com",
        projectId: "series-rn",
        storageBucket: "series-rn.appspot.com",
        messagingSenderId: "1085006714162"
        };
        firebase.initializeApp(config);
    }

    // Metodo atualiza estado dos fields 
    atualizaValores(field, value) {
        this.setState ({
            // http://es6-features.org/#ComputedPropertyNames
            [field]:  value
        })
    }

    tryLogin(){
        const {email, password} = this.state;
        this.setState({isLoading: true , message: ''});

        const loginUserOK = user => {
            this.setState({message: "Sucesso"});
        }

        const loginUserFalhou = error => {
            this.setState({
                //message: error.code            
                message: this.converteMessage(error.code)
            })
        }
        
        firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(loginUserOK)
                .catch(error => {
                    if(error.code === 'auth/user-not-found') {
                        // https://facebook.github.io/react-native/docs/alert
                        Alert.alert(
                            'Email não encontrado',
                            'Deseja criar um cadastro?',
                            [{
                                text: 'Não',
                                onPress: () => {},
                                style: 'cancel' //IOS
                            },
                            {
                                text: 'Sim',
                                onPress: () => {
                                    firebase
                                            .auth()
                                            .createUserWithEmailAndPassword(email, password)
                                            .then(loginUserOK)
                                            .catch(loginUserFalhou)
                                },
                            }],
                            {cancelable: false}
                        )
                    return
                    }
                    loginUserFalhou(error)
                })
                .then(() => this.setState({isLoading : false}))
    }

    converteMessage(error) {
        switch(error){
            case 'auth/invalid-email':
                return "Email não encontrado!";
            case 'auth/wrong-password':
                return "Senha inválida!";
            case 'auth/weak-password':
                return "Senha fraca, adicione mais caracteres!";
            case 'auth/invalid-password':
                return "O valor fornecido para password é inválido"
            case 'auth/user-not-found':
                return "Usuário não encontrado!";
            default: 
                return "Erro desconhecido"
        }
    }

    renderMessage() {
        const {message} = this.state;
        if(!message)
            return null;

        return(
            <Text>{message}</Text>
        )
    }


    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator/>;

        return (
            <Button 
                title="Entrar"
                onPress={() => this.tryLogin()}
            />
        )
        
    }

    render(){    
        return (
            <View style={styleLoginPage.container}>
                <FormRow first={true}>
                    <TextInput  style={styleLoginPage.input}
                        placeholder="Digite o seu email"
                        //Data Bind (ligação de dados) - liga value ao state padrao
                        value={this.state.email}
                        onChangeText={value => this.atualizaValores('email' , value)}

                    />
                </FormRow>
                <FormRow last>
                    <TextInput style={styleLoginPage.input}
                        placeholder="Digite a sua senha"
                        //Data Bind (ligação de dados) - liga value ao state padrao
                        value={this.state.password}
                        // secureTextEntry esconde os caracteres
                        secureTextEntry
                        onChangeText={value => this.atualizaValores('password', value)}
                    />
                </FormRow>

                {this.renderButton ()}
                {this.renderMessage()}
                    
            </View>
        )
    }
}