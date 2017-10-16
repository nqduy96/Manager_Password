import React, { Component } from 'react';
import { Text,View,TouchableOpacity,StyleSheet,TouchableHighlight,Image,TextInput,ScrollView } from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator,DrawerItems } from 'react-navigation';

import AddScreen from './AddAcount/AddScreen';
import HomeScreen from './Home/HomeScreen';

import hamburger from '../Image/hamburger.png';
import check from '../Image/check.png';
import drawer from '../Image/drawer.jpg';


export default class Main extends Component {
    render() {
        return (
            <LoginStack/>
        );
    }
}

class LoginScreen extends Component{
    componentWillMount(){
        var RSAKey = require('react-native-rsa');
        const bits = 256;
        const exponent = '3'; // e: Nguyen duong le
        var rsa = new RSAKey();
        rsa.generate(bits, exponent);
        var publicKey = rsa.getPublicString(); // return json encoded string
        var privateKey = rsa.getPrivateString(); // return json encoded string
        alert(privateKey);
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('AfterLogin')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
} 

const HomeStack = StackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title:'Home',
            headerStyle: { backgroundColor: '#1976D2' },
            headerTitleStyle: { color: 'white' },
            headerLeft: (
                <TouchableOpacity onPress={ () => {navigation.navigate('DrawerOpen') }}>
                    <Image
                        style={{width:40,height:40,margin:10}}
                        source={hamburger}
                    />
                </TouchableOpacity>
            )
        })
    },
    Add:{
        screen: AddScreen,
        navigationOptions: ({navigation}) => ({
            title:'New Account',
            headerStyle: { backgroundColor: '#1976D2' },
            headerTitleStyle: { color: 'white' },
            headerRight: (
                <TouchableOpacity>
                    <Image
                        style={{width:40,height:40,margin:10}}
                        source={check}
                    />
                </TouchableOpacity>
            )
        })
    },
})

const AfterLogin = DrawerNavigator({
    Home:{
        screen:HomeStack,
        navigationOptions: {
            
        }
    },

},{
    contentComponent: props => 
        <View style={{ flex:1 }}>
            <View style={{ backgroundColor:'#424242',flex:3 }}>
                <View style={{position: 'absolute', bottom:0, left: 0, right: 0,padding:20}}>
                    <Text style={{ color:'white',fontSize:25,fontWeight:'bold'}}>Username</Text>
                </View>
            </View>
            <View style={{flex:7 }}>
                <ScrollView>
                    <View style={{ borderTopWidth:1 }}>      
                        <DrawerItems {...props} />
                    </View>
                </ScrollView>
            </View>
        </View>,
})

const LoginStack = StackNavigator({
    Login:{
        screen:LoginScreen,
        
    },
    AfterLogin:{
        screen:AfterLogin,
    }
},{
    headerMode: 'none',
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        marginLeft: 12,
        fontSize: 16,
      },
      photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
      },
})