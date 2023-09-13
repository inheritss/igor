import React,{Component} from 'react';
import {SafeAreaView,Text,StyleSheet} from 'react-native';

export default class App extends Component{

    render(){
        return(
            <SafeAreaView style={StyleSheet.container}>
                <Text>Olá Mundo!</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});