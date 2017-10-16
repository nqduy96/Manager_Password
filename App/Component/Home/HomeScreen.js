
import React, { Component } from 'react';
import { Text,View,TouchableOpacity,TouchableHighlight,StyleSheet,FlatList,Image } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        const data =[
            {id:1,title:"Duy"},
            {id:2,title:"Duy"},
            {id:3,title:"Duy"},
            {id:4,title:"Duy"},
        ]
        return(
            <View style={{ flex:1 }}>
                <View style={{ flex:9 }}> 
                    <FlatList
                        data= {[{key: 'a'}, {key: 'b'}]}
                        renderItem = {({ item }) => 
                            <TouchableOpacity>
                                <View style={{ backgroundColor:'white',padding:10,marginTop:10,marginBottom:10,height:80,flexDirection:'row'}}>
                                    <Image
                                        style={{flex:2}}
                                        source={{uri:'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-1/p160x160/20881905_1391647100888385_369367395173275653_n.jpg?oh=80de93bb65bb13a84f1212952ae29506&oe=5A3EA2C9'}}
                                    /> 
                                    <View style={{flex:5,paddingLeft:20,justifyContent: 'space-between'}}>
                                        <Text style={{ color:'black',fontWeight:'bold',fontSize:20}}>asd</Text>
                                        <Text style={{ flex:1 }}>asd</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor = {item => item.id}
                    />
                </View>
                <View style={{ flex:1 }}>
                    <TouchableHighlight style={styles.addButton}
                        underlayColor='#ff7043' onPress={()=> this.props.navigation.navigate('Add')}>
                        <Text style={{fontSize: 50, color: 'white'}}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#42A5F5',
        borderColor: '#42A5F5',
        borderWidth: 1,
        height: 80,
        width: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right:20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
      }
})