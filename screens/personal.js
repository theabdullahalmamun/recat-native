import React from "react";
import { StyleSheet,View,Text } from "react-native-web";
export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>Personal Life </Text>
            <Text style={styles.gtext}>Md Abdullah Al Mamun borned in Chittagong. He studied his and college at feni. After he admit East West University at CSE department</Text>
            <Text > </Text>
        </View>

    )
}
const styles=StyleSheet.create({
    container: {
        padding: 24,
    },
    titletext:{
        textAlign:'center',
        fontSize: 28,
        
    },
    gtext:{
        textAlign:'center'
    }
})