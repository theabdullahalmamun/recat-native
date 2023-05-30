import React from "react";
import { StyleSheet,TouchableOpacity,Text,View } from "react-native";


export default function Cbutton({text,onPress}){
return(
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
)
}


const styles=StyleSheet.create({
    button:{
        alignItems:'center',
        marginBottom:10,
        marginLeft:0,
        borderRadius:8,
        width:100,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'blue'
    
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:10,
        textAlign:'center'
    }
})