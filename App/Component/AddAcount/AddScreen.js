import React, { Component } from 'react';
import { Text,View,TouchableOpacity,StyleSheet,TouchableHighlight,Image,TextInput } from 'react-native';
import { Isao } from 'react-native-textinput-effects';
import key from '../../Image/key.png';
import block from '../../Image/block.png';

export default class AddScreen extends Component{
    constructor(props){
        super(props);
        this.state = {text: "",passSecurity:true};
    }

    showPass(){
        this.state.passSecurity ? this.setState({ passSecurity: false}) : this.setState({ passSecurity: true})
    }

    render(){
        return(
            <View style={{ flex:1,padding:10,backgroundColor:'white' }}>
                <View style={{ flex:2,flexDirection:'row',margin:10 }}>
                    <Image
                        style={{ width:80,height:80}}
                        source={block}
                    />
                    <Isao
                        style={{ flex: 3,margin:10}}
                        label={'Đăng nhập'}
                        activeColor={'#1976D2'}
                        passiveColor={'#455A64'}
                        inputStyle={{ color: 'black' }}
                    />
                </View>
                <View style={{ flex:8 }}>
                    <Isao
                        label={'Tên người dùng'}
                        activeColor={'#1976D2'}
                        passiveColor={'#455A64'}
                        inputStyle={{ color: 'black' }}
                    />
                    <View style={{ flexDirection:'row',marginTop:10}}>
                        <Isao
                            style={{ flex:8,paddingRight:10 }}
                            label={'Mật khẩu'}
                            activeColor={'#1976D2'}
                            passiveColor={'#455A64'}
                            inputStyle={{ color: 'black' }}
                            secureTextEntry= {this.state.passSecurity}
                        />
                        <TouchableOpacity onPress={() => this.showPass()}>
                            <Image
                                style={{ marginTop:10,width:30,height:30}}
                                source={key}
                            />
                        </TouchableOpacity>
                    </View>
                    <Isao
                        style={{ marginTop:10 }}
                        label={'URL'}
                        activeColor={'#1976D2'}
                        placeholder="https://www.example.com"
                        passiveColor={'#455A64'}
                        inputStyle={{ color: 'black' }}
                    />
                </View>
            </View>
        );
    }
}