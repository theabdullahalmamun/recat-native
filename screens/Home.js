import React from "react";
import { StyleSheet,View,Text,Button} from "react-native";
import Cbutton from "./button";


export default function home({navigation}){
    const p1=()=>{
        navigation.push('personal')
    }
    const p2=()=>{
        navigation.push('career')
    }
    const p3=()=>{
        navigation.push('skill')
    }
    const p4=()=>{
        navigation.push('about')
    }
    const p5=()=>{
        navigation.push('contact')
    }
    return(
        <View>
           
        <View style={styles.blockbtn}>
        <Cbutton text={'Personal Life'} onPress={p1}/>
        <Cbutton text={'Career'} onPress={p2}/>
        <Cbutton text={'Skills'} onPress={p3}/>
        <Cbutton text={'About'} onPress={p4}/>
        <Cbutton text={'Contact'} onPress={p5}/>
            
            
            

        </View>
        
        </View>
        

    )
}
const styles=StyleSheet.create({
    contain: {
        height:'10',
        width:'20',
        
        
    },

    blockbtn:{
        alignItems:'center',
        width:1000,
        marginTop:200,
        height:200,
       marginLeft:300,
        paddingLeft:90
      
    }
})