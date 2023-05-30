import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { color } from "react-native-reanimated";
export default function About(){
    return(
        <View style={styles.container1}>
            <View style={styles.container}>
            <Text style={styles.titletext}>Md Abdullah Al Mamun</Text>
            <Text style={styles.gtext}> Md Abdullah Al Mamun want to start his career with React Native. He also like to integrate his career with AI and Data Science</Text>
        </View>
        </View>

    )
}
const styles=StyleSheet.create({
    container1: {
        padding: 24,
        
    },
    container:{
        backgroundColor:'#'
    },
    gtext:{
        backgroundColor:'#F0FFFF',
        textAlign:'center'
    },
    titletext:{
        fontSize: 18,
        textAlign:"center",
        
        backgroundColor:'#ADD8E6'
        
    }
})